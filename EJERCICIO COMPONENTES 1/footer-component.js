
class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        </footer>`;
    }
}
customElements.define('footer-component', FooterComponent);
