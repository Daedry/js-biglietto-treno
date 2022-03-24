/* 
chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. 
*/

//chiedere all'utente il numero di km che vuole percorrere

const mileage = parseInt(prompt("Quanti chilometri vuole percorrere?"));
console.log(mileage);

if (isNaN(mileage)){
    alert('Selezionare i chilometri numericamente')
}

//chiedere all'utente l'età

const age = parseInt(prompt("Quanti anni ha?"));
console.log(age);

if (isNaN(age)){
    alert('Selezionare l\'età numericamente')
}

//prezzo del biglietto in base ai km

const price_for_km = 0.21;
const price = price_for_km * mileage;
const final_price = price.toFixed(2);
console.log(final_price);

//Sconti

const discount_minor_18 = 20;
let discountValue_minor;
let total_price_minor;

const discount_over_65 = 40;
let discountValue_over;
let total_price_over;

if (age < 18) {
    //sconto del 20% per minorenni
    discountValue_minor = (final_price / 100) * discount_minor_18;
    total_price_minor = discountValue_minor.toFixed(2);
    console.log(total_price_minor);
    document.getElementById("final_price").innerHTML = `Il prezzo è di ${total_price_minor} euro`;
} else if (age > 65){ 
    //sconto del 40% per gli over 65
    discountValue_over = (final_price / 100) * discount_over_65;
    total_price_over = discountValue_over.toFixed(2);
    console.log(total_price_over);
    document.getElementById("final_price").innerHTML = `Il prezzo è di ${total_price_over} euro`;
} else {
    //Prezzo pieno per adulti
    document.getElementById('final_price').innerHTML = `Il prezzo è di ${final_price} euro`;
}




