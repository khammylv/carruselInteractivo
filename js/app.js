let indice =1;
muestraSlides(indice);

let span = document.querySelectorAll(' .slide span');
for (var i = 0; i < slide.length; i++) {
    span[i].addEventListener('click', muestraSlides);
}

function posicionSlide(n){
    muestraSlides(indice=n); 
}

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra'); 
    if (n > slides.length){
        indice =1;
    }
    
    if(n < 1){
        indice = slides.length();
    }

    for(i=0;i< slides.length; i++){
        slides[i].style.display = 'none';
    }

    for(i=0;i< barras.length; i++){
        barras[i].className = barras[i].className.replace(" show","");
    }
    
    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' show';
}

