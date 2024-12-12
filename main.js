import "./app/components/shared/headerComponent/header.js";
import "./app/components/shared/footerComponent/footer.js";
import "./app/components/sections/homeComponent/home.js";
import "./app/components/shared/cardComponent/card.js";
// import './app/components/shared/headingComponent/heading.js';
// import "./app/components/sections/blogsComponent/blogItemComponent/blogItem.js";
import Router from "./router.js";

class App {
	routes = [
		{ path: "404", component: "./app/components/shared/404/404.html" },
		{
			path: "/",
			component: "./app/components/sections/homeComponent/home.html",
		},
		{
			path: "/blogs",
			component: "./app/components/sections/blogsComponent/blogs.html",
		},
		{
			path: "/products",
			component: "./app/components/sections/productsComponent/products.html",
		},
		{
			path: "/about",
			component: "./app/components/sections/aboutComponent/about.html",
		},
		{
			path: "/contact",
			component: "./app/components/sections/contactComponent/contact.html",
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
