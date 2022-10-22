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
const tempo = document.querySelector('.tempo');
let contador = 0;
let primeiraCarta = '';
let segundaCarta = '';
let clicks = 0;
let contandoFim = 0;
let resposta = Number(prompt("Escolha um número de cartas que seja de 4 a 14, que seja par"))
let respostaCerta = false
let reiniciar = '';
let contaTempo;

setInterval(startTempo, 1000);

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
    clicks++;

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
        //acertou!
       
        acertoConfirmado()
        setTimeout(zerar, 1000);

    } else {
        //errou!
        setTimeout(desvirar, 1000);
        setTimeout(zerar, 1000);        
    }
    }

    if(contandoFim == resposta){
        reiniciar = prompt(`
        Você ganhou em ${clicks} jogadas!
        Seu tempo foi: ${contaTempo} segundos!
        Gostaria de reiniciar a partida?
        -------  sim  /  não -------`)
        console.log(reiniciar )       
    }

      if(reiniciar === 'sim'){
        window.location.reload();
      }else if(reiniciar === 'não'){
        alert('Obigado por jogar')
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
    contandoFim += 2;
    console.log(contandoFim)

    for( let i = 0; i < cartasFront.length; i++){
        cartasFront[i].classList.remove('front-face');
    }
    for( let i = 0; i < cartasBack.length; i++){
        cartasBack[i].classList.remove('back-face');
        cartasBack[i].classList.add('conta');
        

    }
  }

  function startTempo(){
    
      contaTempo = Number(tempo.innerHTML);
      tempo.innerHTML = contaTempo+1
        
  }