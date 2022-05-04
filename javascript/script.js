const kilometri = parseInt(prompt("Quanti chilometri devi percorrere?")) ;
console.log(kilometri);
document.getElementById("kilometri").innerHTML = `Devo percorrere: ${kilometri}km`

const eta = parseInt(prompt("Quanti anni hai?")) ;
console.log(eta);
document.getElementById("anni").innerHTML = `Ho ${eta} anni`


if (eta < 18) {
    const prezzodefinitivo = ((kilometri* 0.21)* 80/100);
    console.log(prezzodefinitivo);
    const correzione = prezzodefinitivo.toFixed(2);
    console.log(correzione);
    document.getElementById("prezzo").innerHTML = `Il costo del tuo biglietto è: ${correzione}€`
} else if (eta >= 60)  {
    const prezzodefinitivo = ((kilometri* 0.21)* 40/100)
    console.log(prezzodefinitivo);
    const correzione = prezzodefinitivo.toFixed(2);
    console.log(correzione);
    document.getElementById("prezzo").innerHTML = `Il costo del tuo biglietto è: ${correzione}€`
}else {
    const prezzodefinitivo = kilometri * 0.21
    console.log(prezzodefinitivo);
    const correzione = prezzodefinitivo.toFixed(2);
    console.log(correzione);
    document.getElementById("prezzo").innerHTML = `Il costo del tuo biglietto è: ${correzione}€`
}






