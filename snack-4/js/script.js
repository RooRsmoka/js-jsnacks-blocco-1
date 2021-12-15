// SNACK-4: Chiedi un numero di 4 cifre all’utente e calcola
// la somma di tutte le cifre che compongono il numero.

// Chiedo all'utente di inserire un numero a quattro cifre.
const userNumber = prompt('inserisci un numero di quattro cifre.');
// Definisco la variabile sum per la somma dei numeri e la imposto a 0.
let sum = 0;
// Utilizzo il ciclo FOR per calcolare la somma delle quattro cifre.
for(let i = 0; i < 4 ; i++) {
    sum += parseInt(userNumber[i]); 
};
// Stampo in console il numero inserito dall'utente e la sua somma.
console.log(userNumber);
console.log(sum);