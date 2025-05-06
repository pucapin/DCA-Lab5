import { LoadActions } from "../flux/Actions";

class Root extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        const storage = localStorage.getItem('flux:persist')
        if (storage) {
            LoadActions.load(JSON.parse(storage))
        }
        this.render();

        this.addEventListener('open-cart', () => {
            this.renderCart();
        });
          this.addEventListener('open-home', () => {
            this.render();
        });
        this.addEventListener('check-out', () => {
            this.renderCheckout();
        });
        this.addEventListener('payment-done', () => {
            this.paymentDone();
        });
    }
    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div>
                <nav-bar></nav-bar>
                <hero-element></hero-element>
                <product-render></product-render>
                </div>
            `
        }
    }
    renderCart() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div>
                <nav-bar></nav-bar>
                <cart-render></cart-render>
                </div>
            `
        }
    }
    renderCheckout() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div>
                <nav-bar></nav-bar>
                <check-out></check-out>
                </div>
            `
        }
    }
    paymentDone() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div>
                <nav-bar></nav-bar>
                <thank-you></thank-you>
                </div>
            `
        }
    }
}
export default Root;