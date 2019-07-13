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