<?php
include("conexao.php");
$game_genero = $_POST['genero'];
$id = $_POST['id'];
if (!$id) {
    $sql_mensagem = "SELECT gm.DESCRIPTION as DESCRIPTION,
        gm.id as ID
        FROM games gm
        inner join genero gn on gn.id = gm.id_genero
        WHERE gm.id_genero=$game_genero";
    $resp_mensagem = mysqli_query($bd, $sql_mensagem) or die("Erro");
    echo "Tenho essas opções disponíveis:</br></br>";
    while ($aa = mysqli_fetch_array($resp_mensagem)) {
        echo "$aa[DESCRIPTION] <button id=$aa[ID] onclick=OpenGamePage($aa[ID])>Eu quero!</button></br>";
    }
} else {
    $sql_mensagem = "SELECT * from games where ID='$id'";
    $resp_mensagem = mysqli_query($bd, $sql_mensagem) or die("Erro");
    while ($aa = mysqli_fetch_array($resp_mensagem)) {
        echo "$aa[DESCRIPTION]</br>
            R$ $aa[PRICE]</br>
            <button onclick=OpenGamePage($aa[ID])>Adquirir Agora</button></br>
            <button onclick=Cancelar()>Não tenho interesse!</button>";
    }
}
