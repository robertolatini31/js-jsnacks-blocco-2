// Snack4
// Crea un array di numeri interi e fai la somma di tutti gli elementi
// che sono in posizione dispari


// creo un array di numeri
const numbersArray = [10, 20, 30, 40, 50];

// sommo tuttimgli elementi in posizione dispari
let somma = 0;

for (let i = 0; i < numbersArray.length; i++) {
    if (i % 2 != 0) {
        somma += numbersArray[i];
        console.log(`sommo: ${numbersArray[i]}`);
    }
}

console.log(`la somma totale è: ${somma}`);