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
let soma = 0;

let cb1 = document.querySelector('#check1');
let cb2 = document.querySelector('#check2');
let cb3 = document.querySelector('#check3');
let cb4 = document.querySelector('#check4');
let cb5 = document.querySelector('#check5');
let cb6 = document.querySelector('#check6');
let cb7 = document.querySelector('#check7');
let cb8 = document.querySelector('#check8');


function pontuacao(){
    if(cb1.checked == true){
        pontos = pontos + 150;
        cb1.disabled = true;
    }
    if(cb2.checked == true){
        pontos = pontos + 200;
        cb2.disabled = true;
    }
    if(cb3.checked == true){
        pontos += 100;
        cb3.disabled = true;
    }
    if(cb4.checked == true){
        pontos += 200;
        cb4.disabled = true;
    }
    if(cb5.checked == true){
        pontos += 100;
        cb5.disabled = true;
    }
    if(cb6.checked == true){
        pontos += 200;
        cb6.disabled = true;
    }
    if(cb7.checked == true){
        pontos += 250;
        cb7.disabled = true;
    }
    if(cb8.checked == true){
        pontos += 100;
        cb8.disabled = true;
    }
    exibePontos.innerHTML = pontos;
}

cb1.onchange = pontuacao;
cb2.onchange = pontuacao;
cb3.onchange = pontuacao;
cb4.onchange = pontuacao;
cb5.onchange = pontuacao;
cb6.onchange = pontuacao;
cb7.onchange = pontuacao;
cb8.onchange = pontuacao;