import ProductCard from "./components/ProductCard";
import ProductRender from "./components/ProductRender";
import Root from "./components/Root";
import NavBar from "./components/NavBar";
import CartRender from "./components/CartRender";
import CartElement from "./components/CartElement";

customElements.define('product-card', ProductCard);
customElements.define('product-render', ProductRender);
customElements.define('nav-bar', NavBar)
customElements.define('root-comp', Root);
customElements.define('cart-render', CartRender);
customElements.define('cart-element', CartElement);
