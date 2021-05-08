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

