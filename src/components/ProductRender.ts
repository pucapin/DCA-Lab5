import getData from "../services/getData";
import { ProductType } from "../types/Types";

class ProductRender extends HTMLElement {    
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    async render() {
        if (!this.shadowRoot) return;

        const data:ProductType[] = await getData();

        this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="styles/products.css">
                <div class="contain">

                </div>
        `;
        const container = this.shadowRoot.querySelector(".contain");

        data.forEach(product => {
            const prodCard = this.ownerDocument.createElement('product-card');

            prodCard.setAttribute('image', product.image);
            prodCard.setAttribute('title', product.title);
            prodCard.setAttribute('price', product.price.toString());
            prodCard.setAttribute('description', product.description);
            prodCard.setAttribute('category', product.category);
            prodCard.setAttribute('id', product.id.toString());
            container?.appendChild(prodCard);
        });
    }
}

export default ProductRender;