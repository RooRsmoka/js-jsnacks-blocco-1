// SNACK-4: Chiedi un numero di 4 cifre all’utente e calcola
// la somma di tutte le cifre che compongono il numero.

//
const userNumber = prompt('inserisci un numero di quattro cifre.');
//
let sum = 0;
//
for(let i = 0; i < 4 ; i++) {
    sum += parseInt(userNumber[i]); 
};

console.log(userNumber);
console.log(sum);