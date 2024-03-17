/* ARRAY NUMERI */
const numeri = [];

numeroGenerato100();
console.log(numeri);

numeroGenerato81();
console.log(numeri);

numeroGenerato49();
console.log(numeri);

/* FUNCTIONS */
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
            } else {
                numeri.push(numberGenerato);
                x=2;
            }
        }

    }

}
/* CICLO PER GENERARE 81 NUMERI */
function numeroGenerato81() {
    for (let i=0; i<81; i++){
        
        let x=0;
        while (x<1) {

            let numberGenerato = Math.floor(Math.random() * 81);

            if (numberGenerato === numeri[i]){
                numberGenerato = Math.random() * 81;
            } else {
                numeri.push(numberGenerato);
                x=2;
            }
        }

    }

}
/* CICLO PER GENERARE 49 NUMERI */
function numeroGenerato49() {
    for (let i=0; i<49; i++){
        
        let x=0;
        while (x<1) {

            let numberGenerato = Math.floor(Math.random() * 49);

            if (numberGenerato === numeri[i]){
                numberGenerato = Math.random() * 49;
            } else {
                numeri.push(numberGenerato);
                x=2;
            }
        }

    }

}