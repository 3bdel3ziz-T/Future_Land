import LoadingComponent from "./app/components/shared/loadingComponent/loading.js";
export default class Router {
	constructor(
		appElSelector = "#app",
		routes,
		navLinksArr = Array.from(document.body.querySelectorAll(".nav-link")),
		activeStateClass = "active"
	) {
		this.appElSelector = appElSelector;
		this.routes = routes;
		this.navLinksArr = navLinksArr;
		this.activeStateClass = activeStateClass;
		// Handle initial page load
		this.init();
	}

	init() {
		// Handle initial page path
		this.handleLocation(window.location.pathname);
		// Handle page changes with arrows => back/forward
		window.addEventListener("popstate", () => {
			this.handleLocation(window.location.pathname, false);
		});
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
			if (typeof component === "object" && Object.keys(component).length > 0) {
				resolve(component);
				this.changeTheActiveLink(component);
			} else reject();
		});
	}

	changeTheActiveLink(component) {
		this.routes.forEach((route) => {
			route.isLinkActive = false;
			if (component.path === route.path) route.isLinkActive = true;
		});
		this.navLinksArr.forEach((link) => {
			link.classList.remove(`${this.activeStateClass}`);
			if (
				component.href === link.getAttribute("href") &&
				component.isLinkActive
			)
				link.classList.add(`${this.activeStateClass}`);
		});
	}

	async handleLocation(href, pushState = true) {
		await this.getMatch(href)
			.then((component) => {
				if (pushState) history.pushState(null, null, href);
				this.loadComponent(component);
			})
			.catch((error) => {
				//to handle if the href doesn't match any of the routes array
				this.getMatch("/404").then((p404Component) => {
					history.pushState(null, null, p404Component.href);
					this.loadComponent(p404Component);
				});
			});
	}
	async loadComponent(component) {
		const app = document.querySelector(this.appElSelector);
		LoadingComponent.prototype.start();
		try {
			import(component.path)
				.then(() => {
					app.innerHTML = `<${component.selector}></"${component.selector}">`;
				})
				.catch(() => {
					//in case of the component file(s) doesn't exist or component path isn't work
					this.getMatch("/404").then((p404Component) => {
						history.pushState(null, null, p404Component.href);
						import(p404Component.path).then(() => {
							app.innerHTML = `<${p404Component.selector}></"${p404Component.selector}">`;
						});
					});
				});
		} catch (error) {
			console.error(error);
		} finally {
			LoadingComponent.prototype.stop();
		}
	}
}
