<?php 
    include 'banco.php';
    $con = conecta();

    $nome = strval($_POST["nome"]);
    $cpf = intval($_POST["cpf"]);
    $tipo = strval($_POST["tipo"]);
    $dtnasc = strval($_POST["dtnasc"]);
    $ddd = strval($_POST["ddd"]);
    $fone = strval($_POST["fone"]);
    $tipoTel = intval($_POST["tipoTel"]);
    $logradouro = strval($_POST["logradouro"]);
    $nResidencia = strval($_POST["nResidencia"]);
    $ddd = strval($_POST["ddd"]);
    $complemento = strval($_POST["complemento"]);
    $bairro = intval($_POST["bairro"]);
    $cep = strval($_POST["cep"]);
    $cidade = strval($_POST["cidade"]);
    $uf = strval($_POST["uf"]);
    $usuario = strval($_POST["usuario"]);

    $sql = str_replace("subsnome", $nome, "INSERT INTO clientes(nome, cpf, tipo, dtnasc, usuario) VALUES ('subsnome', 'subscpf', 'substipo', 'subsdtnasc', 'subsusuario');");
    $sql = str_replace("subscpf", $cpf, $sql);
    $sql = str_replace("substipo", $tipo, $sql);
    $sql = str_replace("subsdtnasc", $dtnasc, $sql);
    $sql = str_replace("subsusuario", $usuario, $sql);

    if ($result = mysqli_query($con, $sql)) {
        echo $result;
    }
    $idCliente = 0;
    $sql = str_replace("subscpf", $cpf, "Select idclientes from clientes where cpf = subscpf");
    if ($result = mysqli_query($con, $sql)) {
        $idCliente = $result[0];
    }

    $sql = str_replace("subsddd", $ddd, "INSERT INTO telefones(ddd, fone, tipo, idClientes, usuario) VALUES ('subsddd', 'subsfone', 'substipo', 'subsidClientes', 'subsusuario');");
    $sql = str_replace("subsfone", $fone, $sql);
    $sql = str_replace("substipo", $tipo, $sql);
    $sql = str_replace("subsidClientes", $idClientes, $sql);
    $sql = str_replace("subsusuario", $usuario, $sql);

    if ($result = mysqli_query($con, $sql)) {
        echo $result;
    }

    $sql = str_replace("subscomplemento", $complemento, "INSERT INTO enderecos(complemento, bairro, cep, cidade, uf, idCliente, usuario) VALUES ('subscomplemento', 'subsbairro', 'subscep', 'subscidade', 'subsuf', 'subsidClientes', 'subsusuario');");
    $sql = str_replace("subsbairro", $bairro, $sql);
    $sql = str_replace("subscep", $cep, $sql);
    $sql = str_replace("subscidade", $cidade, $sql);
    $sql = str_replace("subsuf", $uf, $sql);
    $sql = str_replace("subsidClientes", $idClientes, $sql);
    $sql = str_replace("subsusuario", $usuario, $sql);
    if ($result = mysqli_query($con, $sql)) {
        echo $result;
    }
?>