<?php 
    include 'banco.php';
    $con = conecta();

    $nome = strval($_POST["nome"]);
    $senha = intval($_POST["senha"]);

    $sql = str_replace("subsnome", $nome, "Select idusuarios from usuarios where nome = 'subsnome' senha = 'subssenha';");
    $sql = str_replace("subssenha", $senha, $sql);

    if ($result = mysqli_query($con, $sql)) {
        return $result;
    }
?>