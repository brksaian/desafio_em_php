function validaDados(){
    let inputs = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
    var tdCerto = true
    const validaCampo = (nome_Campo, valor) => {
        if(!(valor)){
            if(tdCerto) !tdCerto;
            alert(`O campo ${nome_Campo} está vazio`)
        }
    }
    // let inputs = document.getElementsByClassName("input-form");
    // for(let i = 0; i < inputs.length; i++){
    //     validaCampo(inputs[i].name, inputs[i].value)
    // }
    if(tdCerto){
        enviarDados(inputs[0].value, 
                    inputs[1].value, 
                    inputs[2].value, 
                    inputs[3].value, 
                    inputs[4].value, 
                    inputs[5].value, 
                    inputs[6].value, 
                    inputs[7].value, 
                    inputs[8].value, 
                    inputs[9].value, 
                    inputs[10].value, 
                    inputs[11].value, 
                    inputs[12].value, 
                    inputs[13].value, 
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
            cpf:  cpf,
            tipo:  tipo,
            dtnasc: dtnasc,
            ddd:  ddd,
            fone:  fone,
            tipoTel:  tipoTel,
            logradouro:  logradouro,
            nResidencia:  nResidencia,
            complemento:  complemento,
            bairro:  bairro,
            cep:  cep,
            cidade:  cidade,
            uf: uf
        },
        beforeSend: function() {
            alert("enviando...");
        },
        success: function(result) {
            alert(result);
        }
    }).done(function(resposta) {
        //
    }).fail(function(jqXHR, textStatus ) {
        alert("Request failed: " + textStatus);
    }); 
}