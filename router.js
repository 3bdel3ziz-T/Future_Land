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
	getMatch(href) {
		return new Promise((resolve, reject) => {
			const component = this.routes.find((route) => route.href === href);
			if (component !== undefined) resolve(component);
			else reject();
		});
	}

	async handleLocation(href, pushState = true) {
		await this.getMatch(href)
			.then((component) => {
				if (pushState) history.pushState(null, null, href);
				this.loadComponent(component.path, component.selector);
			})
			.catch((error) => {
				//to handle if the href doesn't match any of the routes array
				this.getMatch("/404").then((p404Component) => {
					if (pushState) history.pushState(null, null, p404Component.href);
					this.loadComponent(p404Component.path, p404Component.selector);
				});
			});
	}
	async loadComponent(componentPath, componentSelector) {
		const app = document.querySelector(this.appElSelector);
		try {
			import(componentPath).then(() => {
				app.innerHTML = `<${componentSelector}></"${componentSelector}">`;
			});
		} catch (error) {
			//to handle if the component file(s) doesn't exist
			import(componentPath).then(() => {
				app.innerHTML = `<${componentSelector}></"${componentSelector}">`;
			});
		}
	}
}
