<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>ChatBot</title>
</head>

<body>
    <header id='pageHeader'>
        <h1 id='pageTitleHeader'>
            <img id='logoHeader' src='images/logo.png'>
            Central Games ChatBot
        </h1>
        <nav id='pageNavegation'>
            <ul>
                <li id='listOption'>
                    <button id='btnhome'>Home</button>
                </li>
                <li id='listOption'>
                    <button id='btnshop'>Shop</button>
                </li>
                <li id='listOption'>
                    <button id='btncontact'>Contact</button>
                </li>
                <li id='listOption'>
                    <button id='btnlogin'>Login</button>
                </li>
            </ul>
        </nav>
    </header>

    <div id='ChatContainer'>
        <div id='MessagesContainer'>
            <!--<div id='InputMessage'>
                <p id='textChatInput'>
                    Oi!
                </p>
            </div>-->
            <div id='BotOutput'>
                <p id='textChatOutput'>
                    Olá, sou Karina!
                </p>
            </div>
            <div id='BotOutput'>
                <p id='textChatOutput'>
                    Oque vc deseja?</br></br>
                    1- Contatos</br>
                    2- Jogos</br>
                    3- Loja</br>
                    4- Seu Carrinho
                </p>
            </div>
        </div>
        <div id='SendMessageContainer'>
            <input type='text' placeholder='Send Message...' name='sendMessageText' id='sendMessageText'>
            <button id='SendButton' name='SendButton' onclick="sendMessage()">Send</button>
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="messages.js"></script>
</html>