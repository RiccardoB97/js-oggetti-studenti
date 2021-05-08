/*Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome,
cognome
età.
*/
var studente = {
    nome: 'Riccardo',
    cognome: 'Beraldo',
    eta: 23
}


//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
var listEl = document.getElementById('proprieta_studente');

for (var key in studente) {
    listEl.insertAdjacentHTML('beforeend', `
    <li> ${key} : ${studente[key]} </li>
    `)
}

//Creare un array di oggetti di studenti.
var classe = [
    {
        nome: 'Riccardo',
        cognome: 'Beraldo',
        eta: 23
    },
    {
        nome: 'Michele',
        cognome: 'Deliso',
        eta: 28
    },
    {
        nome: 'Alessandro',
        cognome: 'Buttafoco',
        eta: 26
    }
];

var arrayStudentiEl = document.getElementById('array_studenti');
var user_name = prompt('Inserisci il nome: ');
var user_surname = prompt('Inserisci il cognome: ');
var user_age = prompt("Inserisci l'età");

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < classe.length; i++) {
    arrayStudentiEl.insertAdjacentHTML('beforeend', `
    <li> Studente ${[i + 1]}: ${classe[i].nome} ${classe[i].cognome}</li>
    `)
}

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
