import './components/shared/headerComponent/header.js';
import './components/shared/footerComponent/footer.js';
import './components/sections/homeComponent/home.js';
import './components/shared/cardComponent/card.js';
import './components/shared/headingComponent/heading.js';
import Router from './router.js';

class App {
  routes = [
    { path: '404', component: './components/shared/404/404.html' },
    { path: '/', component: './components/sections/homeComponent/home.html' },
    { path: '/blogs', component: './components/sections/blogsComponent/blogs.html' },
    { path: '/products', component: './components/sections/productsComponent/products.html' },
    { path: '/about', component: './components/sections/aboutComponent/about.html' },
    { path: '/contact', component: './components/sections/contactComponent/contact.html' },
  ];
  constructor() { 
    new Router(this.routes);
  }
  }

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
