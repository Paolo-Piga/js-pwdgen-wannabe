class User{
    constructor(nome, cognome, colore, pw){
        this.name = nome;
        this.surname = cognome;
        this.colore = colore;
        this.pw = pw;
    }
}

// variabile 
var user1 = new User();

// nome
user1.nome = prompt("come ti chiami?");

// cognome
user1.cognome = prompt("qual e il tuo cognome?");

// colore
user1.colore = prompt("qual e il tuo colore preferito?");

// password

user1.pw = user1.nome + user1.cognome + user1.colore + "23";

alert(`La tua password è stata generata! ${user1.nome}${user1.cognome}${user1.colore}23`);

console.log(user1.nome + user1.cognome + user1.colore + "23");

document.getElementById(`User`).innerHTML = `La tua password è: ${user1.pw}`;