import { State, store } from "../../flux/Store";
import { LoadActions } from "../../flux/Actions";

class CheckOutRender extends HTMLElement {    
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
                <link rel="stylesheet" href="styles/checkrender.css">
                <div class="check-out">
                    <div class="products">
                    </div>
                    <div class="total">
                        <h1 id="total-t">Total</h1>
                        <p id="total-t">$${total}</p>
                        <button id="pay-btn">Pay</button>
                    </div>
                </div>
        `;
        const container = this.shadowRoot.querySelector(".products");

        data.forEach(product => {
            const cartCard = this.ownerDocument.createElement('check-element');

            cartCard.setAttribute('image', product.image);
            cartCard.setAttribute('title', product.title);
            cartCard.setAttribute('price', product.price.toString());
            container?.appendChild(cartCard);
        });

        const payBtn = this.shadowRoot.querySelector('#pay-btn')
        payBtn?.addEventListener('click', () => {
            LoadActions.remove();
            this.dispatchEvent(new CustomEvent('payment-done', {
                bubbles: true, 
                composed: true 
            }));
        })
    }
}

export default CheckOutRender;