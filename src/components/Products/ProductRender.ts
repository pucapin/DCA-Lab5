import getData from "../../services/getData";
import { ProductType } from "../../types/Types";

class ProductRender extends HTMLElement {    
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }
    async render() {
        if (!this.shadowRoot) return;
      
        const cacheKey = 'products';
        const cached = sessionStorage.getItem(cacheKey);
      
        if (cached) {
          const data: ProductType[] = JSON.parse(cached);
          this.renderProducts(data);
      
          getData().then(fresh => {
            sessionStorage.setItem(cacheKey, JSON.stringify(fresh));
            this.renderProducts(fresh);
          });
      
          return;
        } // Estrategia: Stale while revalidate: Muestra el dato viejo de la caché inmediatamente, 
        // y en segundo plano va a la red para actualizarlo.
        // Durante un tiempo puede que el usuario vea datos obsoletos, pero en este caso como los datos
        // de la tienda no son actualizados constantemente, puede ser aplicado sin problema!! :3
      
        const data:ProductType[] = await getData();
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        this.renderProducts(data);
    }

    async renderProducts(data:ProductType[]) {
        if (!this.shadowRoot) return;

        //Network only, garantiza siempre que el usuario vea la información más actualizada de la API.
        //

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