'use strict'

const firstName = ;
const lastName = ;
const nameComplete = `${firstName} ${lastName}`;
console.log(`Il nome completo è: ${nameComplete}`);


//il programma richiede un input all'utente tramite prompt:
//-età, -numero km.--> queste 2 informazioni vanno usate come variabili.

//età
const age = ;
const userAge= Number(age) ;
console.log(`l'utente ha ${userAge} anni`);
document.getElementById("user_age").innerHTML= " " + userAge + " anni" ;

//km - distance
const km = ;
const distance =Number(km) ;
console.log(`distanza che deve percorrere: ${distance} km`);
document.getElementById("distance").innerHTML= " " + distance +"km";

//costo iniziale del biglietto
const ticket = 0.21;
console.log(`costo iniziale del biglietto ${ticket} €`);

//in base  alle informazioni fornite calcola il prezzo, 0,21euro al km.
const ticketCost =  ticket * distance ;
console.log(`costo del biglietto: ${ticketCost.toFixed(2)}€`);
document.getElementById("ticket_price").innerHTML= " "+ ticketCost.toFixed(2)+"€";


// definissco variabile dello sconto a 0 e la modifico all interno delle condizioni
let discount = 0;

    //se l'utente è minore di 18 applico il 20% di sconto
if (userAge < 18){
    discount =  20;
    //creo una const con prezzo scontato, sottraendo  lo sconto al prezzo completo
    const discountedPrice = ticketCost - (ticketCost * discount /100)
    console.log(`è stato applicato il 20% di sconto: ${discountedPrice.toFixed(2)}€`);

    // se sopra i 65 va applicato uno sconto del 40%
}else if (userAge >= 65){
    discount = 40;
    const discountedPrice = ticketCost - (ticketCost * discount /100)
    console.log(`è stato applicato il 40% di sconto: ${discountedPrice.toFixed(2)}€`);

    // se è compreso tra 18 e 65 prezzo normale
}else{
    console.log(`è stato applicato il prezzo normale del biglietto: ${ticketCost.toFixed(2)}€`);

}

//l'output del prezzo è rielaborato con massimo 2 decimali.


