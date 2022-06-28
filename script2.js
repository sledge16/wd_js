age = prompt("Veuille entre votre age?");

age = parseInt(age)

if (age > 18) {
    console.error("Vous etes majeur");
}

if (age < 18) {
    console.error("Vous etes piler minuer");
}

if (age === 18) {
    console.error("Vous etes mineur");
}