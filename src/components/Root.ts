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
    }
    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                <custom-element-a></custom-element-a>

                </div>
            `
        }
    }
}
export default Root;