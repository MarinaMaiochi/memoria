const data = [
    { capa: 'a1.jpg', ator: 'a2.jpg', id:'1'}, { capa: 'b1.jpg', ator: 'b2.jpg', id:'11'},
    { capa: 'c1.jpg', ator: 'c2.jpg', id:'2'}, { capa: 'd1.jpg', ator: 'd2.jpg', id:'12'},
    { capa: 'e1.jpg', ator: 'e2.jpg', id:'3'}, { capa: 'f1.jpg', ator: 'f2.jpg', id:'13'},
    { capa: 'g1.jpg', ator: 'g2.jpg', id:'4'}, { capa: 'h1.jpg', ator: 'h2.jpg', id:'14'},
    { capa: 'i1.jpg', ator: 'i2.jpg', id:'5'}, { capa: 'j1.jpg', ator: 'j2.jpg', id:'15'},
    { capa: 'k1.jpg', ator: 'k2.jpg', id:'6'}, { capa: 'l1.jpg', ator: 'l2.jpg', id:'16'},
    { capa: 'm1.jpg', ator: 'm2.jpg', id:'7'}, { capa: 'n1.jpg', ator: 'n2.jpg', id:'17'},
    { capa: 'o1.jpg', ator: 'o2.jpg', id:'8'}, { capa: 'p1.jpg', ator: 'p2.jpg', id:'18'},
    { capa: 'q1.jpg', ator: 'q2.jpg', id:'9'}, { capa: 'r1.jpg', ator: 'r2.jpg', id:'19'},
    { capa: 's1.jpg', ator: 's2.jpg', id:'10'}, { capa: 't1.jpg', ator: 't2.jpg', id:'20'},
]


document.querySelector('.info').addEventListener('click', Info);
function Info(event){
    const infoBut = document.querySelector(".mostraInfos");
    if(infoBut.classList.contains('some')){
        infoBut.classList.remove('some');
    } else {
        infoBut.classList.add('some');
    }
}

function setUp() {
    let escolhidos = [...data];
    for (let i = 0; i < 10; i++) {
        
        let x = Math.floor(Math.random() * escolhidos.length);
        escolhidos.splice(x, 1);
    }
    montaTabuleiro(escolhidos);
}
function montaTabuleiro(escolhidos){
    const cartas = [];
    for (let i = 0; i < escolhidos.length; i++) {

        let carta1 = document.createElement('img');
        carta1.src=escolhidos[i].capa;
        carta1.classList.add('carta');
        carta1.setAttribute('data-id', escolhidos[i].id)
        let carta2 = document.createElement('img');
        carta2.src=escolhidos[i].ator;
        carta2.classList.add('carta');
        carta2.setAttribute('data-id', escolhidos[i].id)

        cartas.push(carta1,carta2);
    }
    shuffle(cartas);
    
    let x=0;
    for (let i = 0; i < 5; i++) {
        
        let divLinha = document.createElement('div');
        divLinha.classList.add('linha');

        for (let j = 0; j < 4; j++) {

            let box = document.createElement('div');
            box.classList.add('flip-box');
            let boxInner = document.createElement('div');
            boxInner.classList.add('flip-box-inner');
            let boxFront = document.createElement('div');
            boxFront.classList.add('flip-box-front');
            let boxBack = document.createElement('div');
            boxBack.classList.add('flip-box-back');

            boxInner.appendChild(boxFront);
            boxBack.appendChild(cartas[x]);
            boxInner.appendChild(boxBack);
            box.appendChild(boxInner);
            divLinha.appendChild(box);
            x++;
        } 
        
        document.querySelector('.tabuleiro').appendChild(divLinha);
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
document.querySelector('.play').addEventListener('click', mostraCartas);

function mostraCartas(){
    document.querySelector('.play').removeEventListener('click', mostraCartas);
    const clicaveis = document.querySelectorAll('.flip-box');
    for (let i = 0; i < clicaveis.length; i++) {
        clicaveis[i].classList.add('virado');
    }
    setTimeout(escondeCartas, 3000);
}
function escondeCartas(){
    const clicaveis = document.querySelectorAll('.virado');
    for (let i = 0; i < clicaveis.length; i++) {
        clicaveis[i].classList.remove('virado');
    }
}


// __________________________________________________  TIMER  ___________

// function zeraTimer(){
//     pauseTimer();
//     segundos = 0;
//     atualizaTimer();
// }

// const playBut = document.querySelector('.play');
// const pauseBut = document.querySelector('.pause');

// function atualizaTimer(){
//     const minutos = (Math.floor(segundos/60)+ '').padStart(2,0);
//     const restoSegundos = ((segundos%60) + '').padStart(2,0);
//     document.querySelector('.timer > p').innerText = minutos + ':' + restoSegundos;
// }

// function addSegundos(){
//     segundos++;
//     atualizaTimer();
// }

// function playTimer() {
//     if (contando == false){
//         refContagem = setInterval(addSegundos,1000);
//         contando = true;
//         document.querySelector('.pause').removeAttribute("disabled");
//         document.querySelector('.play').setAttribute("disabled", true);

//     }
// }
// playBut.addEventListener('click', playTimer);

// function pauseTimer() {
//     contando = false;
//     clearInterval(refContagem);
//     document.querySelector('.play').removeAttribute("disabled");
//     document.querySelector('.pause').setAttribute("disabled", true);
// }
// pauseBut.addEventListener('click', pauseTimer);

setUp();