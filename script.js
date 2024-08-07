const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const imagem = document.getElementById("bonecoAlura");
const botaoCopiar = document.getElementById("btn-copiar");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

botaoCopiar.style.visibility = "hidden";

function exibirMensagemNaTela(tag, texto) {

    let informacao = document.querySelector(tag);
    informacao.innerHTML = texto;
}

function btnCripto() {
    const textCripto = criptografar(textArea.value);

    if (textCripto == "") {

        exibirMensagemNaTela('h2', 'Nenhuma mensagem encontrada!');
        exibirMensagemNaTela('h3', 'Digite um texto que você deseja criptografar ou descriptografar.');
        mensagem.value = "";
        imagem.style.visibility = "visible";
        botaoCopiar.style.visibility = "hidden";
    }
    else {
        mensagem.value = textCripto; // exibir na tela
        textArea.value = ""; // limpeza

        exibirMensagemNaTela('h2', '');
        exibirMensagemNaTela('h3', '');
        imagem.style.visibility = "hidden";
        botaoCopiar.style.visibility = "visible";
    }
}


function criptografar(stringCripto) {
    //console.table(stringCripto);

    for (let x = 0; x < matrizCodigo.length; x++) {

        if (stringCripto.includes(matrizCodigo[x][0])) {
            stringCripto = stringCripto.replaceAll(matrizCodigo[x][0], matrizCodigo[x][1]);
        }
    }
    return stringCripto;
}

function btnDesenCripto() {
    const textDesenCripto = Desencriptografar(textArea.value);

    if (textDesenCripto == "") {

        exibirMensagemNaTela('h2', 'Nenhuma mensagem encontrada!');
        exibirMensagemNaTela('h3', 'Digite um texto que você deseja criptografar ou descriptografar.');
        mensagem.value = "";
        imagem.style.visibility = "visible";
        botaoCopiar.style.visibility = "hidden";
    }
    else {
        imagem.style.visibility = "hidden";
        botaoCopiar.style.visibility = "visible";
    }

    mensagem.value = textDesenCripto; // exibir na tela
    textArea.value = ""; // limpeza
}

function Desencriptografar(stringDesencripto) {

    for (let x = 0; x < matrizCodigo.length; x++) {

        if (stringDesencripto.includes(matrizCodigo[x][1])) {
            stringDesencripto = stringDesencripto.replaceAll(matrizCodigo[x][1], matrizCodigo[x][0]);
        }
    }
    return stringDesencripto;
}

function btnCopiar() {
    /*o botão copiar só deve aparecer depois da criptografia*/
    const textMensagem = mensagem.value;

    textArea.value = textMensagem;
    mensagem.value = ""; // limpeza
    imagem.style.visibility = "visible";
    botaoCopiar.style.visibility = "hidden";
}
