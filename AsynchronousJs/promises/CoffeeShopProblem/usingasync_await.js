
function placeOrder(drink)
{
    return new Promise(function(resolve , reject)
    {
        if(drink ==='coffee')
         resolve('Order for coffee');
         else
          reject('Order rejected')
    })
}

function processOrder(order){

     return new Promise(function(resolve)
     {
         console.log('order processed');
         resolve(`${order} served`);

     })
}

async function serveOrder()
{
    //try catch is used to catch errors that is it deals with wrong input passed
 try{
   let orderPlaced = await placeOrder('tea');   //it replaced all the work of promise then
   console.log(orderPlaced);

   let orderIsProcessed = await processOrder(orderPlaced);
   console.log(orderIsProcessed)
}
 catch(error){  //it catches the error
    console.log(error);
}
}
serveOrder();