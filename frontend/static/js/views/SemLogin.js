import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("É necessário login");
    }

    async getHtml() {
        return `
            <h1>Para acessar as paginas é necessário login</h1>
            <p>
                Para efetuar essa é necessário <a href="/Login" data-link>logar</a>.
            </p>
        `;
    }
}