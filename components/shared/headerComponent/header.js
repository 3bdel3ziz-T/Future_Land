export default class Header extends HTMLElement {
    template;
    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
        this.innerHTML = this.template
    }
    
    async connectedCallback() {
        await this.renderView();
    }
    async renderView() {
        try {
            const response = await fetch('./components/shared/headerComponent/header.html');
            const template = await response.text();
            this.innerHTML = template;
        } catch (error) {
            console.error('Error loading header template:', error);
        }
    }}

// Register the custom element
window.customElements.define('header-component', Header);

// new Header();