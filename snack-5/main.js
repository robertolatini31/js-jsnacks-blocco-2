// Snack5 (Bonus)
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi 
// fino a quando ne avrà tanti quanti l’altro.


console.log('prima delle modifiche');
// creo due array con num differente di elementi
let bigArray = ['luca', 3, 'mario', 6, 'sara'];
console.log(`primo array: ${bigArray} | lunghezza: ${bigArray.length}`);
let smallArray = [1, 'roberto', 'giulia'];
console.log(`secondo array: ${smallArray} | lunghezza: ${smallArray.length}`);

// comparo e li faccio di lunghezza uguale
while (bigArray.length != smallArray.length) {
    if (bigArray.length < smallArray.length) {
        bigArray.push('ciao');
    } else {
        smallArray.push('ciao');
    }
}
console.log('dopo le modifiche');
console.log(`primo array: ${bigArray} | lunghezza: ${bigArray.length}`);
console.log(`secondo array: ${smallArray} | lunghezza: ${smallArray.length}`);