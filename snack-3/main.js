// Snack3
// Generatore di “nomi cognomi” casuali: 
// il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati 
// con nome e cognome.

// lista nomi
let nameList = ['Roberto', 'Sandro', 'Marisa', 'Valeria'];
console.log(`lista nomi: ${nameList}`);
// lista cognomi
let surnameList = ['Rossi', 'Latini', 'Gugliotti', 'Sozzi'];
console.log(`lista cognomi: ${surnameList}`);
// inizializzo la nuova lista
let newList = [];

for (let i = 0; (i < nameList.length && i < surnameList.length); i++) {
    let element = nameList[Math.ceil((Math.random() * nameList.length)) - 1] + ' ' + surnameList[Math.ceil((Math.random() * nameList.length)) - 1];
    newList[i] = element;
}

console.log(`La falsa lista invitati è: ${newList}`);