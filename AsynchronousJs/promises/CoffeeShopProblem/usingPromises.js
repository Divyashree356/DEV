
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

placeOrder('juice').then(function (demand)
{
  console.log(demand);
  let orderIsProessed = processOrder(demand);
  return orderIsProessed;
}).then(function(orderServed)
{
    console.log(orderServed);
}).catch(function(err)
{
    console.log(err);
})

