import { CartActions } from "../flux/Actions";
import { State, store } from "../flux/Store";
import { ProductType } from "../types/Types";
class ProductCard extends HTMLElement {    

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }


    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="styles/productcard.css">
                <div class="product-card">
                        <div class="product">
                        <div id="img-contain">
                            <img src="${this.getAttribute('image')}" id="prod-img">
                        </div>
                        <h4>${this.getAttribute('title')}</h4>
                        <div class="bottom">
                        <p>$${this.getAttribute('price')}</p>
                        <button id="buy-now">Add to cart</button>
                        </div>
                        </div>
                </div>
        `;
        const cartBtn = this.shadowRoot.querySelector('#buy-now') as HTMLButtonElement;
        if (cartBtn) {
            cartBtn?.addEventListener('click', () => {
                cartBtn.textContent = 'In Cart';
                const product: ProductType = {
                    id: Number(this.getAttribute('id')),
                    title: this.getAttribute('title') || '',
                    price: Number(this.getAttribute('price')),
                    description: this.getAttribute('description') || '',
                    category: this.getAttribute('category') || '',
                    image: this.getAttribute('image') || '',
                };
                CartActions.add(product)
                console.log('hello')
            })
        }
    }
}

export default ProductCard;