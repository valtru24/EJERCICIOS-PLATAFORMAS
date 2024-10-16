
class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <img src="IMAGENES/hello-kitty.svg" alt="Artist Logo" class="logo">
            <h1>Hello Lola</h1>
            <nav>
                <ul>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Biografía</a></li>
                    <li><a href="#bio">Contacto</a></li>
                </ul>
            </nav>
        <label id="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
    
        </header>`;
    }
}
customElements.define('header-component', HeaderComponent);
