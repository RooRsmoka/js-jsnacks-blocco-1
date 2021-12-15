// SNACK-5: Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino 
// a quando la somma degli elementi è minore di 50.

// Creo array vuoto.
let numberList = [];
// Definisco la variabile userNumber per il numero inserito dall'utente.
let userNumber;
// Definisco la variabile sum per il calcolo della somma.
let sum = 0;
// Utilizzo il ciclo DO WHILE per chiedere all'utente un numero fino a
// quando la somma e minore di 50, lo aggiungo all'array e calcolo la somma
// dei numeri inseriti.
do {
    userNumber = parseInt(prompt('inserisci un numero.'));
    numberList.push(userNumber);
    sum += userNumber;
    console.log(userNumber);
} while (sum < 50);
// Stampo in console la somma finale.
console.log(sum);

// ciclo WHILE
// while (sum < 50) {
//     userNumber = parseInt(prompt('inserisci un numero.'));
//     numberList.push(userNumber);
//     sum += userNumber;
//     console.log(userNumber)
// }
// console.log(sum);