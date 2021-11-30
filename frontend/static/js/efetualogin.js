function validaDados(){
    var tdCerto = true
    const validaCampo = (nome_Campo, valor) => {
        if(!(valor)){
            if(tdCerto) !tdCerto;
            alert(`O campo ${nome_Campo} está vazio`)
        }
    }
    let inputs = document.getElementsByClassName("input-form");
    for(let i = 0; i < inputs.length; i++){
        validaCampo(inputs[i].name, inputs[i].value)
    }
    if(tdCerto){
        enviarDados(inputs[0].value, 
                    inputs[1].value, 
        )
    }
}

async function enviarDados(nome, cpf, tipo, dtnasc, ddd, fone, tipoTel, logradouro, nResidencia, complemento, bairro, cep, cidade, uf){
    alert('Enviando...')
    await $.ajax({
        method: "post",
        url:'../../../backend/addCliente.php',
        data: {
            nome: nome,
            senha:  senha
        },
        beforeSend: function() {
            alert("enviando...");
        },
        success: function(result) {
            if(!!(result)) logado = true;
        }
    }).done(function(resposta) {
        //
    }).fail(function(jqXHR, textStatus ) {
        alert("Request failed: " + textStatus);
    }); 
}