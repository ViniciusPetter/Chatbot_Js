var objDiv = document.getElementById('MessagesContainer');
objDiv.scrollTop = objDiv.scrollHeight;

var opcaoInicial = true;
var opcaoJogos = false;
var carrinho = [];

function SetNewMessageOutput(message) {
    const chat = document.getElementById('MessagesContainer');
    chat.innerHTML +=
        "<div id=BotOutput><p id=textChatOutput>"
        + message
        + "</p></div>";
}
function SetNewMessageInput(message) {
    const chat = document.getElementById('MessagesContainer');
    chat.innerHTML +=
        "<div id=InputMessage><p id=textChatInput>"
        + message
        + "</p></div>";
    objDiv.scrollTop = objDiv.scrollHeight;
    var objLimpa = document.getElementById('sendMessageText');
    objLimpa.value = "";

}
function sendMessage() {
    const sendMessageText = document.getElementById('sendMessageText');
    var text = sendMessageText.value;
    SetNewMessageInput(text);
    Output(text);
}

function Output(text) {
    //CODIÇÕES PARA RESPOSTAS DO BOT
    if (opcaoInicial == true) {
        if (text == "1" || text == "contatos" || text == "Contatos") {
            SetNewMessageOutput("Nossos contatos:</br></br>" +
                "contato@centralgames.com</br>" +
                "suporte@centralgames.com"
            );
            SetNewMessageOutput("Selecione uma das opções </br></br>" +
                "1- Contatos</br>" +
                "2- Jogos</br>" +
                "3- Loja</br>" +
                "4- Seu Carrinho"
            );
        } else {
            if (text == "2" || text == "Jogos" || text == "jogos") {
                SetNewMessageOutput("Que tipo de jogos você quer ver?</br></br>" +
                    "1 - Tiro</br>" +
                    "2 - Simulação</br>" +
                    "3 - Corrida</br>"
                );
                opcaoInicial = false;
                opcaoJogos = true;
            } else {
                if (text == "3" || text == "Loja" || text == "loja") {
                    SetNewMessageOutput("Abri a loja em outra guia para podermos continuar nossa conversa ;)!");
                    SetNewMessageOutput("Deseja continuar? Selecione uma opção! </br></br>" +
                        "1- Contatos</br>" +
                        "2- Jogos</br>" +
                        "3- Loja</br>" +
                        "4- Seu Carrinho"
                    );
                    window.open('loja.php', '_blank');
                } else {
                    if (text == "4" || text == "carrinho" || text == "Carrinho") {
                        GamesCarrinho(carrinho);
                    } else {
                        SetNewMessageOutput("Desculpe não compreendi! Selecione uma das opções! </br></br>" +
                            "1- Contatos</br>" +
                            "2- Jogos</br>" +
                            "3- Loja</br>" +
                            "4- Seu Carrinho"
                        );
                    }
                }
            }
        }
    } else {
        if (opcaoJogos == true) {
            if (text == 1) {
                $.ajax({
                    url: 'bot.php',
                    type: 'POST',
                    data: 'genero=1',
                    success: function (result) {
                        SetNewMessageOutput(result);
                    }
                })
            } else {
                if (text == 2) {
                    $.ajax({
                        url: 'bot.php',
                        type: 'POST',
                        data: 'genero=2',
                        success: function (result) {
                            SetNewMessageOutput(result);
                        }
                    })
                } else {
                    if (text == 3) {
                        $.ajax({
                            url: 'bot.php',
                            type: 'POST',
                            data: 'genero=3',
                            success: function (result) {
                                SetNewMessageOutput(result);
                            }
                        })
                    } else {
                        if (text == 4) {
                            opcaoInicial = true;
                            opcaoJogos = false;
                            SetNewMessageOutput("Ok, escolha uma opção </br></br>" +
                                "1- Contatos</br>" +
                                "2- Jogos</br>" +
                                "3- Loja</br>" +
                                "4- Seu Carrinho"
                            );
                        } else {
                            SetNewMessageOutput("Desculpe não compreendi! Selecione uma das opções </br></br>" +
                                "1 - Tiro</br>" +
                                "2 - Simulação</br>" +
                                "3 - Corrida</br>" +
                                "4 - Não quero mais ver jogos!</br>"
                            );
                        }
                    }
                }
            }
        }
    }

}

function GamesCarrinho(arrayCarrinho) {
    var dados = "";
    for (var x = 0; x < arrayCarrinho.length; x++) {
        dados += "ids[]=" + arrayCarrinho[x];
        if (x < (arrayCarrinho.length - 1)) {
            dados += "&";
        }
        console.log(dados);
    }

    $.ajax({
        url: 'carrinho.php',
        type: 'GET',
        data: dados,
        success: function (result) {
            SetNewMessageOutput("Seu carrinho possuí:</br>" + result);
            console.log(result);
        }
    })
}
function OpenGamePage(id) {
    $.ajax({
        url: 'loja.php',
        type: 'POST',
        data: 'id=' + id,
        success: function (result) {
            SetNewMessageOutput(result);
        }
    })
    //window.open('loja.php?id=' + id, '_blank');
}
function Cancelar() {
    SetNewMessageOutput("Compra Cancelada! Que tipo de jogos você quer ver?</br></br>" +
        "1 - Tiro</br>" +
        "2 - Simulação</br>" +
        "3 - Corrida</br>" +
        "4 - Não quero mais ver jogos!</br>"
    );
}
function AddCarrinho(id) {
    if (carrinho.length > 0) {
        for (var x = 0; x <= carrinho.length; x++) {
            if (carrinho[x] == id) {
                alert("Jogo já está no carrinho!");
            } else {
                if (x == carrinho.length - 1) {
                    carrinho.push(id);
                    alert("Jogo adicionado ao carrinho!");
                }
            }
        }
    } else {
        carrinho.push(id);
        alert("Jogo adicionado ao carrinho!");
        console.log(carrinho);
    }
}
