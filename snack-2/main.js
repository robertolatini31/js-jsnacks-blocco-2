// Snack2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.


// inserire un numero
const userNumber = parseInt(prompt('inserire un numero'));

if (userNumber % 2 == 0) {
    console.log(`inserito numero Pari: ${userNumber}`);
} else {
    let newNumber = userNumber + 1;
    console.log(`inserito numero Dispari, + 1 = ${newNumber}`);
}