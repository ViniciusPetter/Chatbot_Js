<?php
include('conexao.php');
$id = array();
$id = $_GET['ids'];
for ($x = 0; $x < count($id); $x++) {
    $sql_mensagem = "SELECT *
        FROM games
        WHERE id='" . $id[$x] . "'";
    $resp_mensagem = mysqli_query($bd, $sql_mensagem) or die("Erro");
    $a = mysqli_fetch_array($resp_mensagem);
    echo "$a[DESCRIPTION]</br>";
}
echo "<script src='messages.js'></script>";
echo "<script>SetNewMessageOutput(Selecione uma das opções! </br></br>
        1- Contatos</br>
        2- Jogos</br>
        3- Loja</br>
        4- Seu Carrinho
    );</script>";