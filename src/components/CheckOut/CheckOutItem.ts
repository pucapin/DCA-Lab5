class CheckOutItem extends HTMLElement {    

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }


    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="styles/check-el.css">
                <div class="cart-element">
                    <div class="content">
                    <div id="img-contain"><img src="${this.getAttribute('image')}" alt="" id="prod-img"></div>
                    <p id="title">${this.getAttribute('title')}</p>
                    <p>$${this.getAttribute('price')}</p>
                    </div>
                </div>
        `;
    }
}

export default CheckOutItem;