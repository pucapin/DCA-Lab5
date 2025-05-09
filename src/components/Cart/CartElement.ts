import { CartActions } from "../../flux/Actions";
class CartElement extends HTMLElement {    

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }


    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="styles/cart-el.css">
                <div class="cart-el">
                    <div class="content">
                    <div id="img-contain"><img src="${this.getAttribute('image')}" alt="" id="prod-img"></div>
                    <p id="title">${this.getAttribute('title')}</p>
                    <p>$${this.getAttribute('price')}</p>
                    <button id="remove">Remove</button>
                    </div>
                </div>
                </div>
        `;
        const removeBtn = this.shadowRoot.getElementById('remove');
        const idAttr = this.getAttribute('id');
        const id = idAttr ? parseInt(idAttr, 10) : null;
        removeBtn?.addEventListener('click', () => {
            if(id) {
                CartActions.remove(id);
            }
        })
    }
}

export default CartElement;