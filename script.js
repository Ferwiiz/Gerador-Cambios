let sliderElementC = document.querySelector(".sliderC");
let sliderElementD = document.querySelector(".sliderD");
let buttonElement = document.querySelector(".button");
let sizeCambios = document.querySelector(".valorC");
let sizeDiamantes = document.querySelector(".valorD");

sizeCambios.innerHTML = sliderElementC.value;
sizeDiamantes.innerHTML = sliderElementD.value;

sliderElementC.oninput = function(){
    sizeCambios.innerHTML = this.value;
}

sliderElementD.oninput = function(){
    sizeDiamantes.innerHTML = this.value;
}

function sucesso(){
    window.location.href = "sucesso.html";
}


