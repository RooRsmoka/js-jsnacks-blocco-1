// SNACK-1: Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Definisco la variabile con cui calcolerò la somma e la imposto a 0.
let sum = 0;
// Creo ciclo FOR per chiedere 10 volte all'utente un numero,
// le stringhe inserite vengono parsate a numero e sommati. 
for (let i = 0; i < 10; i++) {
    let userNumber = parseInt(prompt('inserisci un numero.'))
    sum += userNumber;
    console.log(userNumber);
};
// Stampo il valore della somma alla fine del ciclo.
console.log(sum);
