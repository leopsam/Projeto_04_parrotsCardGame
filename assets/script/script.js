const cartas = [
    `<div onclick="virar(this)" class="carta carta1">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/bobrossparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta1">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/bobrossparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta2">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/explodyparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta2">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/explodyparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta3">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/fiestaparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta3">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/fiestaparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta4">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/metalparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta4">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/metalparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta5">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/revertitparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta5">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/revertitparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta6">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/tripletsparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta6">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/tripletsparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta7">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/unicornparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta carta7">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/unicornparrot.gif" /> 
    </div>`
];

const cartasSelecionada = [];

let resposta = Number(prompt("Escolha um número de cartas que seja de 4 a 14, que seja par"))
let respostaCerta = false


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

console.log(cartas)
console.log(cartasSelecionada)

function inserirCartas() {
    const carta = document.querySelector('.tabuleiro')
    console.log(carta)
    cartasSelecionada.sort(comparador);
    for (let i=0; resposta>i; i++) {
        
        const item1 = cartasSelecionada[i];
        carta.innerHTML += item1
    }
    
}

function virar(elemento){
    elemento.classList.toggle("virada")
    console.log(elemento)

    const cartaFrente = elemento.querySelector('.frente')
    cartaFrente.classList.toggle('invisivel');

    const cartaVerso = elemento.querySelector('.verso')
    cartaVerso.classList.toggle('invisivel');

  }


  function comparador() { 
	return Math.random() - 0.5; 
}