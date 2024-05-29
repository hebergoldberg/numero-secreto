let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAletatorio();
let tentativas = 1

function exibirTextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate: 1.2});   
}

exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','jogo do numero secreto');
    exibirTextoNaTela('p',`Escolha um numero de 1 a ${numeroLimite}`);
}


function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
            
        } else {
                exibirTextoNaTela('p','O número secreto é maior');
        } tentativas++;
        limparCampo();
    } 
}

function gerarNumeroAletatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAletatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAletatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();

}
