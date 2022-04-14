
const lib= require('./lib');

let  amount=2000;
let toCut=200;


// lib.accountUpdate('TV' , chargeDebitCard);
function chargeDebitCard()
{
  amount= amount-toCut;
  console.log(`account balance:  ${amount}`);
}


let Promiseobj = lib.promiseAccountUpdate('tv').then(chargeDebitCard).then(function()
{
    console.log('running promise')
})

