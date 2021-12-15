// SNACK-2: Stampa il cubo di ciascuno dei primi N numeri, dove N è un numero indicato dall’utente.
// (se inserisce 10, si stampa il cubo di 1, di 2, di 3,...)

// Chiedo all'utente di inserire un numero.
const userNumber = parseInt(prompt('Inserisci un numero'));
// Utilizzo il ciclo FOR per calcolare la radice cubica del numero immesso dall'utente e tutti i numeri precedenti
// poi stampo su console i risultati.
for (let i = 1; i <= userNumber; i++) {
    cubic = Math.cbrt(i);
    console.log(cubic);
};
// Utilizzo il ciclo WHILE per calcolare la radice cubica del numero immesso dall'utente e tutti i numeri precedenti
// poi stampo su console i risultati.
// let i = 1;
// while (i <= userNumber) {
//     cubic = Math.cbrt(i);
//     console.log(cubic);
//     i++;
// };