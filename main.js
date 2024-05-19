'use strict'

console.log('sono connesso')

const firstName = document.getElementById('firstName')
const lastName =   document.getElementById('lastName')

//oggetti del dom

const buttonTicketGenerator = document.getElementById('ticketGenerator')
const buttonDelete = document.getElementById('delete')
const ticketContainer = document.getElementById('ticketContainer')
const completeNameOutput = document.querySelector('.completeNameOutput')
const carriageOutput = document.querySelector('.carriage')
const cpCodeOutput = document.querySelector('.cp-code')
const ticketCostResult= document.querySelector('.ticketCostResult')
const offers = document.getElementById('offers')



//funzione ButtonTicketGenerator
buttonTicketGenerator.addEventListener('click', function(){

    ticketContainer.classList.remove('d-none')

    //salvare il value delle variabili nome e cognome in una costante
   const firstNameInput = firstName.value
   const lastNameInput = lastName.value

    
   //nome completo
   const completeName = `${firstNameInput} ${lastNameInput}`
   completeNameOutput.textContent = `${completeName}`


   //carrozza
   const randomNumCarriage = Math.floor(Math.random() * 10) + 1
   carriageOutput.textContent =  randomNumCarriage

   //cp-code
   const randomNumCpCode = Math.floor(Math.random() * 10000) + 1
   cpCodeOutput.textContent = randomNumCpCode 

   //age
   const age = document.getElementById('age')
   const userAge= Number(age.value)

   //recupero i valori del km dall'input
   const kmLabel = document.querySelector('.km-label').value
   const distance = Number(kmLabel) 

   //salvare costo iniziale e costo finale in una costante
   const ticket = 0.21
   const ticketCost =  ticket * distance 
   
   let discount = 0

    //controllo 
   if (isNaN(Number(kmLabel))) {
    console.log('La distanza inserita non è valida.');
    return;
    }


   if (userAge < 18){
    discount =  20
    //creo una const con prezzo scontato, sottraendo  lo sconto al prezzo completo
    const discountedPrice = (ticketCost - (ticketCost * discount /100))
    ticketCostResult.textContent = `${discountedPrice.toFixed(2)}€`
    offers.textContent =`under 18`
    console.log(`è stato applicato il 20% di sconto: ${discountedPrice.toFixed(2)}€`);

    // se sopra i 65 va applicato uno sconto del 40%
    }else if (userAge >= 65){
    discount = 40
    const discountedPrice = ticketCost - (ticketCost * discount /100)
    ticketCostResult.textContent = `${discountedPrice.toFixed(2)}€`
    offers.textContent =`over 65`
    console.log(`è stato applicato il 40% di sconto: ${discountedPrice.toFixed(2)}€`)

    // se è compreso tra 18 e 65 prezzo normale
    }else{
    
    ticketCostResult.textContent = `${ticketCost.toFixed(2)}€`
    offers.textContent =`prezzo normale`
    console.log(`è stato applicato il prezzo normale del biglietto: ${ticketCost.toFixed(2)}€`)

}


})


buttonDelete.addEventListener('click',function(){

    ticketContainer.classList.add('d-none')

    firstName.value= ''
    lastName.value= ''
    age.value= ''
    document.querySelector('.km-label').value = ''

    completeNameOutput.textContent = '***'
    carriageOutput.textContent = '****'
    cpCodeOutput.textContent = '****'
    ticketCostResult.textContent = '****'
    offers.textContent = 'standard'
})

// console.log(`l'utente ha ${userAge} anni`)
// console.log(`distanza che deve percorrere: ${distance} km`)
// console.log(`costo iniziale del biglietto ${ticket} €`)
// console.log(`costo del biglietto: ${ticketCost.toFixed(2)}€`)



