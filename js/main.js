// Nome
let nome = prompt("Come ti chiami?");

console.log(nome);

// Cognome
let cognome = prompt("Qual è il tuo cognome?")

console.log(cognome);

// Colore preferito
let colore = prompt("Qual è il tuo colore preferito");

console.log(colore);

// Risposte
let risposte = nome + cognome + colore + "23";

console.log(risposte);

document.getElementById("User").innerHTML = `La password è: ${risposte}`