<?php 
    include 'banco.php';
    $con = conecta();
    $dia = strval($_POST["dia"]);
    $equipamento = strval($_POST["equipamento"]);
    $hora = strval($_POST["hora"]);
    $sql = str_replace("diaj", $dia, "SELECT sum(quantidade) as soma from horario where hora =  'horad' AND dia =  'diaj' and equipamento = 'equipamepçnto' GROUP BY dia, hora, equipamento");
    $sql = str_replace("equipamepçnto", $equipamento, $sql);
    $sql = str_replace("horad", $hora, $sql);
    if ($result = mysqli_query($con, $sql)) {
        if(mysqli_fetch_row($result) == 0){
            $envia = 0;
        }else{
            while($row = mysqli_fetch_row($result)) {
                $envia = $row;
            }
        }
        $envia = json_encode($envia);
        echo $envia;
    }
?>