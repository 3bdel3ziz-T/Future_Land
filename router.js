export default class Router {
	constructor(appElSelector, routes) {
		this.appElSelector = appElSelector;
		this.routes = routes;
		this.init();
		// Handle initial page load
		this.handleLocation(window.location.pathname);
		window.addEventListener("popstate", () => {
			this.handleLocation(window.location.pathname, false);
		});
	}

	init() {
		// Handle link clicks
		document.addEventListener("click", (e) => {
			if (e.target.matches("a")) {
				e.preventDefault();
				this.handleLocation(e.target.pathname);
			}
		});
	}

	handleLocation(path, pushState = true) {
		const pagePath = this.routes.find((route) => route.path === path);
		if (pagePath !== undefined) {
			if (pushState) {
				history.pushState(null, null, path);
			}
			this.loadComponent(pagePath.component);
		}
	}

	async loadComponent(componentPath) {
		const app = document.querySelector(this.appElSelector);
		try {
			const response = await fetch(componentPath);
			if (response.status === 200 && response.ok) {
				const html = await response.text();
				app.innerHTML = html;
			} else {
				const response = await fetch(
					this.routes.find((route) => route.path === "404").component
				);
				const html = await response.text();
				app.innerHTML = html;
			}
		} catch (error) {
			console.error(`Error: ${error}`);
		}
	}
}
