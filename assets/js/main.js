

// Chiedi all'utente il suo nome, (uso prompt per chiedere il nome all'utente)
const firstName = prompt('Scrivi il tuo nome');
console.log(firstName);

// poi chiedi il suo cognome, (uso prompt per chiedere il cognome all'utente)
const lastName = prompt('Scrivi il tuo cognome');
console.log(lastName);

// poi chiedi il suo colore preferito, (uso prompt per chiedere il colore preferito dell'utente)
const favoriteColor = prompt('Colore preferito?');
console.log(favoriteColor);

// Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
const password = firstName + lastName + favoriteColor;
console.log(password);
document.getElementById('pass');
let result = document.getElementById('pass');
console.log(result);
result.innerHTML = password + '23';