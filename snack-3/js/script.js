// SNACK-3: Stampa le potenze di 2 fino a 1000.


// Definisco la costante x e le attribuisco il valore della base (2).
const x = 2;
// Definisco la variabile i e le attribuisco il valore dell'esponente. 
let i = 0;
// Utilizzo il ciclo WHILE per calcolare le potenze e stamparle.
while (i < 1000) {
    power = Math.pow(x, i);
    console.log(power);
    i++;
}
// Utilizzo il ciclo FOR per calcolare le potenze e stamparle.
// for (let i = 0; i < 1000; i++) {
//     power = Math.pow(x, i)
//     console.log(power);
// };