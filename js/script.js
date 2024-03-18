/* VARIABILI */
/* array numeri */
const numeri = [];
/* elementi creati */
const main = document.querySelector('main');
const grid = document.createElement('div');
const row = document.createElement('div');

/* seleziona button da html */
const btn = document.querySelector('button.btn');

/* AGGIUNGI EVENTO IN BASE ALLA DIFFICOLTA */
btn.addEventListener('click', function() {

    /* seleziona select */
    let difficolta = document.querySelector('#livello').value;

    if (difficolta === "easy") {
        createElementiMain();
        numeroGenerato100();
    } else if (difficolta === "normal") {
        createElementiMain();
        numeroGenerato81();
    } else if (difficolta === "hard") {
        createElementiMain();
        numeroGenerato49();
    }
   
});

/* FUNCTIONS */
/* FUNZIONE PER CREARE E APPENDERE ELEMENTI MAIN AL MAIN */
function createElementiMain() {

    /* SELEZIONA MAIN DA HTML */
    main.style.display="block";
    console.log(main);

    /* CREA E APPENDI CONTAINER AL MAIN */
    grid.classList.add('container');
    grid.innerHTML= `<div> </div>`;
    main.append(grid);
    console.log(grid);
    
    /* CREA E APPENDI CONTAINER AL MAIN */
    row.classList.add('row');
    row.innerHTML= `<div> </div>`;
    grid.append(row);
    console.log(row);
}
/* FUNZIONE PER GENERARE 100 NUMERI */
function numeroGenerato100() {
    /* CICLO PER GENERARE 100 NUMERI */
    for (let i=0; i<100; i++){
        
        /* INIZIALIZZAZIONE VARIABILE PER ALTRO CICLO */
        let x=0;

        /* CICLO PER VERIFICARE DI NON INSERIRE LO STESSO NUMERO PIU VOLTE NEL ARRAY */
        while (x<1) {
            /* GENERA UN NUMERO RANDOM INTERO */
            let numberGenerato = Math.floor(Math.random() * 100);

            /* VERIFICA */
            if (numberGenerato === numeri[i]){
                numberGenerato = Math.random() * 100;
            } /* AGGIUNGI IL NUMERO NEL QUADRARTO E APPENDILO ALLA .ROW */
                else {
                    numeri.push(numberGenerato);
                    let quadrato = document.createElement('div');
                    quadrato.classList.add('quadratino-10');
                    quadrato.innerHTML= `<div> ${numberGenerato} </div>`;
                    row.append(quadrato);
                    x=2;
                }
        }
        
    }

}
/* FUNZIONE PER GENERARE 81 NUMERI */
function numeroGenerato81() {
    /* CICLO PER GENERARE 81 NUMERI */
    for (let i=0; i<81; i++){
        
        let x=0;
        while (x<1) {

            let numberGenerato = Math.floor(Math.random() * 81);

            if (numberGenerato === numeri[i]){
                numberGenerato = Math.random() * 81;
            } else {
                numeri.push(numberGenerato);
                let quadrato = document.createElement('div');
                quadrato.classList.add('quadratino-9');
                quadrato.innerHTML= `<div> ${numberGenerato} </div>`;
                row.append(quadrato);
                x=2;
            }
        }

    }

}
/* FUNZIONE PER GENERARE 49 NUMERI */
function numeroGenerato49() {
    /* CICLO PER GENERARE 49 NUMERI */
    for (let i=0; i<49; i++){
        
        let x=0;
        while (x<1) {

            let numberGenerato = Math.floor(Math.random() * 49);

            if (numberGenerato === numeri[i]){
                numberGenerato = Math.random() * 49;
            } else {
                numeri.push(numberGenerato);
                let quadrato = document.createElement('div');
                quadrato.classList.add('quadratino-7');
                quadrato.innerHTML= `<div> ${numberGenerato} </div>`;
                row.append(quadrato);
                x=2;
            }
        }

    }

}