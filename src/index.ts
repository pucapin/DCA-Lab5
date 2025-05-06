import ProductCard from "./components/Products/ProductCard";
import ProductRender from "./components/Products/ProductRender";
import Root from "./pages/Root";
import NavBar from "./components/NavBar";
import CartRender from "./components/Cart/CartRender";
import CartElement from "./components/Cart/CartElement";
import CheckOutItem from "./components/CheckOut/CheckOutItem";
import CheckOutRender from "./components/CheckOut/CheckOutRender";
import ThankYou from "./components/ThankYou";
import Hero from "./components/Hero";

customElements.define('product-card', ProductCard);
customElements.define('product-render', ProductRender);
customElements.define('nav-bar', NavBar)
customElements.define('root-comp', Root);
customElements.define('cart-render', CartRender);
customElements.define('cart-element', CartElement);
customElements.define('check-element', CheckOutItem);
customElements.define('check-out', CheckOutRender);
customElements.define('thank-you', ThankYou);
customElements.define('hero-element', Hero)
