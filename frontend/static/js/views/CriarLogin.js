import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Novo usuário");
    }

    async getHtml() {
        return `
            <div class="container">
                <div class="container-login">
                    <div class="wrap-login">
                        <form class="login-form">
                            <span class="login-form-title">
                                Novo usuário
                            </span>

                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="email" autocomplete="off">
                                <span class="focus-input-form" data-placeholder="E-mail"></span>
                            </div>

                            <div class="wrap-input margin-bottom-35">
                                <input class="input-form" type="password" name="password">
                                <span class="focus-input-form" data-placeholder="Senha"></span>
                            </div>

                            <div class="container-login-form-btn">
                                <button class="login-form-btn">
                                    Novo usuário
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <script>
                let inputs = document.getElementsByClassName('input-form');
                for (let input of inputs) {
                    input.addEventListener("blur", function() {
                        if(input.value.trim() != ""){
                            input.classList.add("has-val");
                        } else {
                            input.classList.remove("has-val");
                        }
                    });
                }
            </script>
        `;
    }
}