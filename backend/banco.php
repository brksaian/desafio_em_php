<?php
// Connecting, selecting database
    function conecta(){
        $servername = "localhost";
        $username = "root";
        $password = "root";
        $db = "php_login";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $db);
        
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
    }

    // Performing SQL query
    function profs($conn){
        if ($result = mysqli_query($conn, "SELECT nome FROM profs")) {
            for($i = 0; $row = mysqli_fetch_row($result); $i++) {
                $envia[$i] = $row[0];
            }
            mysqli_free_result($result);
            $envia = json_encode($envia);
            echo "<script>populaProf('$envia')</script>";
        }
    }

    function tablets($conn){
        if ($result = mysqli_query($conn, "SELECT prof, quantidade, dia, hora, equipamento FROM horario order by dia, hora")) {
            $envia = [];
            for($i = 0; $row = mysqli_fetch_row($result); $i++) {
                $row = json_encode($row);
                $envia[$i] = $row;
            }
            mysqli_free_result($result);
            $envia = json_encode($envia);
            echo "<script>populaTablet($envia)</script>";
        }
    }

    function limpa($result){
        // Free resultset
        mysqli_free_result($result);
    }

    function close($link){
        // Closing connection
        mysqli_close($link);
    }
?>