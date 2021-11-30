<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio PHP</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="/static/css/index.css">
    <script src="sweetalert2.all.min.js"></script>
    <script type="text/javascript" src="./static/js/cadastroCliente.js"></script>
    <?php include "../backend/banco.php"?>
</head>
<body>
    <nav class="nav">
        <a href="/" class="nav__link" data-link>Home</a>
        <a href="/NovoCliente" class="nav__link" data-link>Adicionar cliente</a>
        <a href="/NovoUsuario" class="nav__link" data-link>Adicionar usuario</a>
        <a href="/Login" class="nav__link" data-link>Login</a>
    </nav>
    <div id="app"></div>
    <script type="module" src="/static/js/index.js"></script>
</body>
</html>