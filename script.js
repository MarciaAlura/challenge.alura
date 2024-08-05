const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnCripto(){
    const textCripto = criptografar(textArea.value);
    mensagem.value = textCripto; // exibir na tela
    textArea.value = ""; // limpeza
}


function criptografar(stringCripto) {

    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringCripto = stringCripto; // precisa garantir que seja tudo minusculo

    //console.table(stringCripto);

    for(let x = 0; x < matrizCodigo.length; x++){

        if(stringCripto.includes(matrizCodigo[x][0])) {
            console.table((matrizCodigo[x][0]));
            stringCripto = stringCripto.replaceAll(matrizCodigo[x][0], matrizCodigo[x][1]);
        }
   
    }

    return stringCripto;
}



