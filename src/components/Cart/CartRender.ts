import { State, store } from "../../flux/Store";

class CartRender extends HTMLElement {    
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        store.subscribe((state: State) => {this.handleChange(state)});
        this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }

    render(state = store.getState()) {
        if (!this.shadowRoot) return;

        const data = state.cart;
        let total = 0;

        data.forEach(element => {
            total += element.price;
        });

        this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="styles/cart.css">
                <div class="cart-container">
                    <div class="cart">
                    </div>
                    <div class="total">
                    <h2 id="total">Total</h2>
                    <p id="total">$${total}</p>
                    <button id="check-out">Check-out</button>
                    </div>      
                </div>
        `;
        const container = this.shadowRoot.querySelector(".cart");

        data.forEach(product => {
            const cartCard = this.ownerDocument.createElement('cart-element');

            cartCard.setAttribute('image', product.image);
            cartCard.setAttribute('title', product.title);
            cartCard.setAttribute('price', product.price.toString());
            container?.appendChild(cartCard);
        });

        const checkOut = this.shadowRoot.querySelector('#check-out')
        checkOut?.addEventListener('click', () => {
            if(!state.cart || state.cart.length === 0) {
                alert("There's no items in your cart! :(")
                return;
            } else {
                this.dispatchEvent(new CustomEvent('check-out', {
                    bubbles: true, 
                    composed: true 
                }));
            }
        })
    }
}

export default CartRender;