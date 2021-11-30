import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Novo cliente");
    }

    async getHtml() {
        return `
            <div class="container">
                <div class="container-login">
                    <div class="wrap-login">
                        <form class="login-form">
                            <span class="login-form-title">
                                Novo cliente
                            </span>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="Nome" id="nome_cliente" autocomplete="off">
                                <span class="focus-input-form" data-placeholder="Nome"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="CPF" id="cpf_cliente" autocomplete="off">
                                <span class="focus-input-form" data-placeholder="CPF"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="Tipo" id="tipo_cliente" autocomplete="on">
                                <span class="focus-input-form" data-placeholder="Tipo"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="date" name="Data de nascimento" id="dtnasc_cliente" autocomplete="on">
                                <span class="focus-date-form" data-placeholder="Data de nascimento"></span>
                            </div>
            
                            <span class="login-form-title">
                                Telefone
                            </span>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35 width:3%">
                                <input class="input-form" type="text" name="DDD" id="ddd_cliente" autocomplete="off">
                                <span class="focus-input-form" data-placeholder="DDD"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="Fone" id="fone_cliente" autocomplete="off">
                                <span class="focus-input-form" data-placeholder="Fone"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="Tipo do telefone" id="tipo_telefone_cliente" autocomplete="on">
                                <span class="focus-input-form" data-placeholder="Tipo do numero"></span>
                            </div>
                            <span class="login-form-title">
                                Endereço
                            </span>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="Logradouro" id="logradouro_cliente" autocomplete="off">
                                <span class="focus-input-form" data-placeholder="Logradouro"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="Numero da residencia" id="numero_cliente" autocomplete="off">
                                <span class="focus-input-form" data-placeholder="Número da residencia"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="Complemento" id="complemento_cliente" autocomplete="on">
                                <span class="focus-input-form" data-placeholder="Complemento"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="Bairro" id="bairro_cliente" autocomplete="on">
                                <span class="focus-input-form" data-placeholder="Bairro"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="CEP" id="cep_cliente" autocomplete="on">
                                <span class="focus-input-form" data-placeholder="CEP"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="Cidade" id="cidade_cliente" autocomplete="on">
                                <span class="focus-input-form" data-placeholder="Cidade"></span>
                            </div>
            
                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="UF" id="uf_cliente" autocomplete="on">
                                <span class="focus-input-form" data-placeholder="UF"></span>
                            </div>
            
                            <div class="container-login-form-btn">
                                <button class="login-form-btn" type="submit" onclick="validaDados()">
                                    Adicionar cliente
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }
}