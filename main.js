import "./app/components/shared/headerComponent/header.js";
import "./app/components/shared/footerComponent/footer.js";
import Router from "./router.js";

class App {
	routes = [
		{
			href: "/404",
			selector: "p404-component",
			path: "./app/components/shared/404Component/404.js",
		},
		{
			href: "/",
			selector: "home-component",
			path: "./app/components/sections/homeComponent/home.js",
		},
		{
			href: "/blogs",
			selector: "blogs-component",
			path: "./app/components/sections/blogsComponent/blogs.js",
		},
		// {
		// 	href: "/products",
		// 	selector: "products-component",
		// 	path: "./app/components/sections/productsComponent/products.js",
		// },
		{
			href: "/about",
			selector: "about-component",
			path: "./app/components/sections/aboutComponent/about.js",
		},
		{
			href: "/contact",
			selector: "contact-component",
			path: "./app/components/sections/contactComponent/contact.js",
		},
	];
	constructor() {
		new Router("#app", this.routes);
	}
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
	new App();
});
