class Hero extends HTMLElement {    

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }


    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="styles/hero.css">
                <div class="hero">
                <h1 class="hero-content"> Welcome to my FakeStore!! :3</h1>             
                </div>
        `;
        }
    }


export default Hero;