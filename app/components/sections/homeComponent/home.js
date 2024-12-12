import '../../shared/headingComponent/heading.js';   
export default class HomeComponent extends HTMLElement {
    selector = 'home-component';
    // template;
    // exploreButton;
    constructor() {
        console.log('home');
        super();
    }
    
    async connectedCallback() {
        await this.render();
    }
    async render() {
        try {
            const response = await fetch('./app/components/sections/homeComponent/home.html');
            const template = await response.text();
            this.innerHTML = template;
            console.log(template);
        } catch (error) {
            console.error('Error loading header template:', error);
        }
    }}

// Register the custom element
window.customElements.define('home-component', HomeComponent);