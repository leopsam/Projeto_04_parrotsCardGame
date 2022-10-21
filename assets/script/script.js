const cartas = [
    `<div onclick="virar(this)" class="carta">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/bobrossparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/explodyparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/fiestaparrot.gif" /> 
    </div>`,
    `<div onclick="virar(this)" class="carta">
        <img class="frente" src="./assets/img/back.png" />
        <img class="verso invisivel"src="./assets/img/metalparrot.gif" /> 
    </div>`
];

let resposta = Number(prompt("Escolha um número de cartas que seja de 4 a 14, que seja par"))
let respostaCerta = false


while(respostaCerta == false){
if((resposta % 2 == 1) || (resposta < 4) || (resposta > 14)){
    alert("numero invalido")
    resposta = Number(prompt("Escolha um número de cartas que seja de 4 a 14, que seja par"))
}else{
    respostaCerta = true
    inserirCartas()
}
}

function inserirCartas() {
    const carta = document.querySelector('.tabuleiro')
    console.log(carta)
    cartas.sort(comparador);
    for (let i=0; resposta>i; i++) {
        
        const item = cartas[i];
        carta.innerHTML += item
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

  cartas.sort(comparador);

  function comparador() { 
	return Math.random() - 0.5; 
}