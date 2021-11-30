<?php 
    include 'banco.php';
    $con = conecta();
    $dia = strval($_POST["dia"]);
    $equipamento = strval($_POST["equipamento"]);
    $sql = str_replace("diaj", $dia, "SELECT sum(quantidade) as soma, hora from horario where dia =  'diaj' and equipamento = 'equipamepçnto' GROUP BY hora order by hora, equipamento");
    $sql = str_replace("equipamepçnto", $equipamento, $sql);
    if ($result = mysqli_query($con, $sql)) {
        $envia = [];
        for($i = 0; $row = mysqli_fetch_row($result); $i++) {
            //$row = json_encode($row);
            switch ($row[1]) {
                case "07:30":
                    $envia[0] = $row[0];
                    break;
                case "08:20":
                    $envia = popula($envia, 2);
                    $envia[1] = $row[0];
                    break;
                case "09:30":
                    $envia = popula($envia, 3);
                    $envia[2] = $row[0];
                    break;
                case "10:20":
                    $envia = popula($envia, 4);
                    $envia[3] = $row[0];
                    break;
                case "11:20":
                    $envia = popula($envia, 5);
                    $envia[4] = $row[0];
                    break;
                case "13:00":
                    $envia = popula($envia, 6);
                    $envia[5] = $row[0];
                    break;
                case "13:50":
                    $envia = popula($envia, 7);
                    $envia[6] = $row[0];
                    break;
                case "14:55":
                    $envia = popula($envia, 8);
                    $envia[7] = $row[0];
                    break;
                case "15:45":
                    $envia = popula($envia, 9);
                    $envia[8] = $row[0];
                    break;
                case "16:50":
                    $envia = popula($envia, 10);
                    $envia[9] = $row[0];
                    break;
            }
        }
        if($envia == []){
            for($i = 0; $i < 11; $i++){
                $envia[$i] = 0;    
            }
        }else{
            $envia = popula($envia, 11);
        }
        $envia = json_encode($envia);
        echo $envia;
    }
    function popula($envia, $n){
        for($i = count($envia); $i < $n; $i++){
            $envia[$i] = 0;
        }
        return $envia;
    }
?>