const cartas = [
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta1" src="./assets/img/bobrossparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta1" src="./assets/img/bobrossparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta2" src="./assets/img/explodyparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta2" src="./assets/img/explodyparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta3" src="./assets/img/fiestaparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta3" src="./assets/img/fiestaparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta4" src="./assets/img/metalparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta4" src="./assets/img/metalparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta5" src="./assets/img/revertitparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta5" src="./assets/img/revertitparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta6" src="./assets/img/tripletsparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta6" src="./assets/img/tripletsparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta7" src="./assets/img/unicornparrot.gif" /> 
        </div>
    </div>`,
    `<div class="carta" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/img/back.png" />
        </div>
        <div class="back-face face">
            <img class="carta7" src="./assets/img/unicornparrot.gif" /> 
        </div>
    </div>`,
];
const cartasSelecionada = [];
let contador = 0;
let primeiraCarta = '';
let segundaCarta = '';
let resposta = Number(prompt("Escolha um número de cartas que seja de 4 a 14, que seja par"))
let respostaCerta = false

function comparador() { 
	return Math.random() - 0.5; 
}

while(respostaCerta == false){
if((resposta % 2 == 1) || (resposta < 4) || (resposta > 14)){
    alert("numero invalido")
    resposta = Number(prompt("Escolha um número de cartas que seja de 4 a 14, que seja par"))
}else{
    respostaCerta = true

    for (let i=0; resposta>i; i++) {
        cartasSelecionada.push(cartas[i]);       
    }

    inserirCartas()   
}
}    

function inserirCartas() {
    const carta = document.querySelector('.tabuleiro')
    cartasSelecionada.sort(comparador);
    for (let i=0; resposta>i; i++) {
        
        const item1 = cartasSelecionada[i];
        carta.innerHTML += item1
    }
    
}

  function virarCarta(carta) {
    carta.classList.toggle('virada');
    contador++;

    if(primeiraCarta === ''){
        primeiraCarta = carta.querySelector('.back-face img')
        primeiraCarta = primeiraCarta.classList[0]

    } else if(segundaCarta === ''){
        segundaCarta = carta.querySelector('.back-face img')
        segundaCarta = segundaCarta.classList[0]

    }
    
    if (contador == 2){
        contador = 0;

    if(primeiraCarta === segundaCarta){
        console.log('acertou')
        console.log(primeiraCarta)
        console.log(segundaCarta)

        
        acertoConfirmado()
        setTimeout(zerar, 1000);


       
    } else {
        console.log('errou')
        console.log(primeiraCarta)
        console.log(segundaCarta)

        
        setTimeout(desvirar, 2000);
        setTimeout(zerar, 1000);
        
    }
    }
    
  }

  function desvirar(){
    const cartas = document.querySelectorAll('.virada');
    for( let i = 0; i < cartas.length; i++){
        cartas[i].classList.remove('virada');
    }
   
  }

  function zerar(){
    primeiraCarta = '';
    segundaCarta = '';
  }

  function acertoConfirmado(){
    const cartasFront = document.querySelectorAll('.virada .front-face');
    const cartasBack = document.querySelectorAll('.virada .back-face');

    for( let i = 0; i < cartasFront.length; i++){
        cartasFront[i].classList.remove('front-face');
    }
    for( let i = 0; i < cartasBack.length; i++){
        cartasBack[i].classList.remove('back-face');
    }


    console.log(cartasFront)
    console.log(cartasBack)
  }