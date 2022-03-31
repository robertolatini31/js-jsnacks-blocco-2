// SNACK 1 
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// inizializzo array numeri utente
let numbersUserArray =[];

// inizializzo la somma
let somma = 0;

// chiedo 5 numeri all'utente
let index = 0
while (index < 5) {
     numbersUserArray[index] = parseInt(prompt('inserire un numero'));
     console.log(`il num inserito è: ${numbersUserArray[index]}`);
    somma += numbersUserArray[index];
    index++
}

// stampo la somma

console.log(`la somma è ${somma}`);