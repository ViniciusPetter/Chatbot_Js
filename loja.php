<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="loja.css">
    <title>ChatBot</title>
</head>

<body>
    <?php
    include("conexao.php");
    $id = $_POST['id'];
    $sql_mensagem = "SELECT *
    FROM games
    WHERE id=$id";
    $resp_mensagem = mysqli_query($bd, $sql_mensagem) or die("Erro");
    while ($aa = mysqli_fetch_array($resp_mensagem)) {
        echo "
            <img src='$aa[img_game]'>
            <h1>$aa[DESCRIPTION]</h1>
            <h2>R$ $aa[PRICE]<h2/>
            </br>";
    }
    echo "
        <button id=buyButton name=buyButton onclick=AddCarrinho($id)>Adicinar ao Carrinho</button></br>
        <button id=cancelBuy name=cancelBuy onclick=Cancelar()>Cancelar Compra</br>";
    ?>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="messages.js"></script>

</html>