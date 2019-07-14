let btnNext = document.querySelector('#btn-next');
let btnBack = document.querySelector('#btn-back');

function next(){
    let slider = document.querySelector('.slider');
    sideScroll(slider,'direita',5,130,165);
}
function back(){
    let slider = document.querySelector('.slider');
    sideScroll(slider,'esquerda',5,130,165);
}
function sideScroll(elemento,direcao,velocidade,distancia,passo){
    scrollAmount = 0;
    let slideTimer = setInterval(function(){
        if(direcao == 'esquerda'){
            elemento.scrollLeft -= passo;
        } else {
            elemento.scrollLeft += passo;
        }
        scrollAmount += passo;
        if(scrollAmount >= distancia){
            window.clearInterval(slideTimer);
        }
    }, velocidade);
}

btnNext.onclick = next;
btnBack.onclick = back;

let exibePontos = document.querySelector('#pontos');
let pontos = 0;
let total = 0;

pontos = document.querySelectorAll('input[type="checkbox"]');

for(let i of pontos){
    i.addEventListener('click', somarPontos);
}
function somarPontos(){
    let resultado = parseInt(this.value, 10);
    let pontuacao = document.querySelector('#pontos');
    if(this.checked == true){
        total += resultado;
        this.disabled = true;
    }
    pontuacao.innerHTML = total;
    if(total >= 1000){
        alert('Parabéns! Você ganhou uma medalha.');
        let medalha = document.querySelector('#img-teste');
        medalha.style.filter = "grayscale(0%)";
    }
}