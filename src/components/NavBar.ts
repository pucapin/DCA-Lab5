class NavBar extends HTMLElement {    

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    handleChange() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="styles/navbar.css">
                <nav class="navbar">
                <div class="nav-l"><h3>FakeStore :3</h3><p id="home">Home</p></div>
                <div class="nav-r">
                <img src="images/cart.svg" alt="" id="cart">
                </nav>
        `;
        const openCart = this.shadowRoot.getElementById('cart');
        const openHome = this.shadowRoot.getElementById('home')
        openCart?.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('open-cart', {
                bubbles: true, 
                composed: true 
            }));
        })
        openHome?.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('open-home', {
                bubbles: true, 
                composed: true 
            }));
        })
        }
        
    }

export default NavBar;