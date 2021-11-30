import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Bem vindo</h1>
            <p>
                Site criado com php, usando navegação de javascript com conexão com o mysql.
            </p>
            <p>
                <a href="/Login" data-link>Logar</a>.
            </p>
        `;
    }
}