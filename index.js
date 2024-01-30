//Oppgave 1 - Sjekker om det angitte tallet er positivt eller negativt.

/*
let x = prompt("Er nummeret positivt eller negativt?");
if (x >= 0) {
  alert("Dette tallet er positivt");
} else {
  alert("dette tallet er negativt");
}
*/

//Oppgave 2 - Sjekker om det angitte tallet er et partall eller oddetall

/*
let y = prompt ("Er dette tallet et oddetall eller partall?")
if (y % 2 === 0 ) {
    alert ("Tallet er partall")
} else {
    alert ("Tallet er oddetall")
} 
*/

//Oppgave 3

/*
let karaktr = prompt ("Skriv inn ditt resultat:");
if (karaktr >= 50) {
  alert ("Du har bestått din eksamen!")
} else {
  alert ("Du har dessverre ikke bestått din eksamen.")
}
*/

//Oppgave 4

/*
let karakter = prompt(
  "Skriv inn din poengsum for å finne ut om du har bestått eller ikke!"
);
let poengsum = parseInt(karakter);

if (!isNaN(poengsum) && poengsum >= 0 && poengsum <= 100) {
  if (poengsum >= 50) {
    alert("Du har bestått din eksamen!");
  } else {
    alert("Du har dessverre ikke bestått eksamen.");
  }
} else {
  alert("Vennligst skriv inn en gyldig poengsum mellom 0 og 100.");
}
*/

//Oppgave 5
/*
let ukedag = prompt ("Hvilken dag i tallform er det?")
if (ukedag == 1) {
  alert ("Det er Mandag");
} else if (ukedag == 2) {
  alert  ("Det er Tirsdag");
} else if (ukedag == 3) {
  alert ("Det er Onsdag");
} else if (ukedag == 4){
  alert ("Det er Torsdag");
} else if (ukedag == 5) {
  alert ("Det er fredag");
} else if (ukedag == 6) {
  alert ("Det er lørdag")
} else if  (ukedag == 7) {
  alert ("Det er søndag")
} else {
  alert ("Ugyldig ukedag. Prøv igjen.")
}
*/

//Oppgave 6
/*
let dagNummerSwitch = prompt("Skriv inn dagsnummeret (1-7):");
switch (parseInt(dagNummerSwitch)) {
    case 1:
        alert("Mandag");
        break;
    case 2:
        alert("Tirsdag");
        break;
    case 3:
        alert("Onsdag");
        break;
    case 4:
        alert("Torsdag");
        break;
    case 5:
        alert("Fredag");
        break;
    case 6:
        alert("Lørdag");
        break;
    case 7:
        alert("Søndag");
        break;
    default:
        alert("Ugyldig dagsnummer");
}
*/

//Oppgave 7
/*
let a = prompt("Skriv inn det første tallet:");
let b = prompt("Skriv inn det andre tallet:");

a = parseFloat(a);
b = parseFloat(b);

let tegn = prompt("Velg tegn (+, -, *, /):");

switch (tegn) {
    case '+':
        alert(`${a} + ${b} = ${a + b}`);
        break;
    case '-':
        alert(`${a} - ${b} = ${a - b}`);
        break;
    case '*':
        alert(`${a} * ${b} = ${a * b}`);
        break;
    case '/':
        alert(`${a} / ${b} = ${a / b}`);
        break;
    default:
        alert("Ugyldig tegn valgt.");
}
*/

//Oppgave 8
/*
let a = prompt("Skriv inn det første tallet:");
let b = prompt("Skriv inn det andre tallet:");

a = parseFloat(a);
b = parseFloat(b);

if (a > b) {
  alert(`${a} er større enn ${b}.`);
} else if (a < b) {
  alert(`${b} er større enn ${a}.`);
} else {
  alert("Tallet er like store.")
}
*/

//Oppgave 9
/*
let karakter1 = prompt("Skriv inn første poengsum:");
let karakter2 = prompt("Skriv inn andre poengsumm:");

karakter1 = parseFloat(karakter1);
karakter2 = parseFloat(karakter2);

sum = karakter1 + karakter2;
average = sum / 2;

if (average >= 50) {
  alert(`Gratulerer! Du har bestått med en poengsum av ${average}`);
} else {
  alert(`Du har ikke bestått. Din poengsum var ${average}`);
}
*/

//Oppgave 10, 11, 12 og 13
/*
let dividend = prompt("Skriv inn det første tallet:");
dividend = parseInt(dividend);

if (dividend % 3 === 0) {
  alert(`${dividend} kan deles på 3`);
} else {
  alert(`${dividend} kan ikke deles på 3`);
}

if (dividend % 5 === 0) {
  alert (`${dividend} kan deles på 5`)
} else {
  alert(`${dividend} kan ikke deles på 5`)
}
*/

//Oppgave 14
/*
let tall1 = prompt("Skriv inn det første tallet:");
let tall2 = prompt("Skriv inn det andre tallet:");
let tall3 = prompt("Skriv inn det tredje tallet:");

tall1 = parseInt(tall1);
tall2 = parseInt(tall2);
tall3 = parseInt(tall3);

if (tall1 <= tall2 && tall1 <= tall3) {
  alert(`Det minste tallet er: ${tall1}`);
} else if (tall2 <= tall1 && tall2 <= tall3) {
  alert(`Det minste tallet er: ${tall2}`);
} else {
  alert(`Det minste tallet er: ${tall3}`);
}
*/

//Oppgave 15
/*
let bokstav = prompt("Skriv inn en bokstav:");
bokstav = bokstav.toLowerCase();
if ("aeiouyæøå".includes(bokstav)) {
  alert(`${bokstav} er en vokal`);
} else if ("bcdfghjklmnpqrstvwxz".includes(bokstav)) {
  alert(`${bokstav} er en konsonant`);
} else {
  alert("Du har skrevet noe ugyldig.");
}
*/

//Oppgave 16

let farge = prompt("Skriv inn fargen (red, blue, green, yellow, purple, white (with black backgroun)):");


switch (farge.toLowerCase()) {
    case 'red':
        document.write(`<p style="color: red;">Dette er teksten i fargen rød.</p>`);
        break;
    case 'blue':
        document.write(`<p style="color: blue;">Dette er teksten i fargen blå.</p>`);
        break;
    case 'green':
        document.write(`<p style="color: green;">Dette er teksten i fargen grønn.</p>`);
        break;
        case 'yellow':
        document.write(`<p style="color: yellow;">Dette er teksten i fargen gul.</p>`);
        break;
        case 'purple':
        document.write(`<p style="color: purple;">Dette er teksten i fargen lilla.</p>`);
        break;
        case 'white':
        document.write(`<p style="color: white; background-color: black">Dette er teksten i fargen hvit.</p>`);
        break;
    default:
        document.write(`<p>Ugyldig fargevalg.</p>`);
}
