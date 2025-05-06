class NavBar extends HTMLElement {    

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    handleChange() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
                <style>
                    .nav-l {
                    display: flex;
                    flex-direction: row;
                    margin-left: 100px;
                    gap: 40px;
                    align-items: center;
                    justify-content: flex-start;
                    width: 80%;
                    
                }
                .nav-r {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    
                }
                .navbar {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                    margin-bottom: 0px;
                    width: 100%;
                    
                }

                #cart {
                    height: 24px;
                    width: auto;
                }
                </style>
                <nav class="navbar">
                <div class="nav-l"><h3>FakeStore :3</h3><p id="home">Home</p></div>
                <div class="nav-r">
                <img src="images/cart.svg" alt="" id="cart">
                </nav>
        `;
        const openCart = this.shadowRoot.getElementById('cart');
        const openHome = this.shadowRoot.getElementById('home')
        openCart?.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('open-cart', {
                bubbles: true, 
                composed: true 
            }));
        })
        openHome?.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('open-home', {
                bubbles: true, 
                composed: true 
            }));
        })
        }
        
    }

export default NavBar;