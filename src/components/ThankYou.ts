class ThankYou extends HTMLElement {    

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }


    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="styles/thank-you.css">
                <div class="contain">
                <div class="thanks">
                    <h1>Thanks for shopping with us!</h1>
                    <button id="go-back">Go back to store</button>
                </div>               
                </div>
        `;
        const openHome = this.shadowRoot.getElementById('go-back');
        openHome?.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('open-home', {
                bubbles: true, 
                composed: true 
            }));
        })
        }
    }


export default ThankYou;