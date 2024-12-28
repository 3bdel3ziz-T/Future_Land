import "./app/components/shared/headerComponent/header.js";
import "./app/components/shared/footerComponent/footer.js";
import "./app/components/shared/loadingComponent/loading.js";
import "./app/components/shared/upComponent/up.js";
import "./app/components/shared/chatComponent/chat.js";

import Router from "./router.js";
class App {
	routes = [
		{
			href: "/404",
			selector: "p404-component",
			path: "./app/components/shared/404Component/404.js",
			isLinkActive: false,
		},
		{
			href: "/",
			selector: "home-component",
			path: "./app/components/sections/homeComponent/home.js",
			isLinkActive: false,
		},
		{
			href: "/blogs",
			selector: "blogs-component",
			path: "./app/components/sections/blogsComponent/blogs.js",
			isLinkActive: false,
		},
		{
			href: "/products",
			selector: "products-component",
			path: "./app/components/sections/productsComponent/products.js",
			isLinkActive: false,
		},
		{
			href: "/about",
			selector: "about-component",
			path: "./app/components/sections/aboutComponent/about.js",
			isLinkActive: false,
		},
		{
			href: "/contact",
			selector: "contact-component",
			path: "./app/components/sections/contactComponent/contact.js",
			isLinkActive: false,
		},
	];
	constructor() {
		new Router("#app", this.routes, "active");
	}
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
	new App()
});
