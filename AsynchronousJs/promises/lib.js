
function accountUpdate(product , cb)
{
  setTimeout(function()
  {
    console.log(`product purchased: ${product}`);
    cb();
    // cb();  //if we make multiple cb by chance it will amke an issue this is a security issue in callback functions
    // cb();
  },2000)
}



//no multiple callling can be done in promises
function promiseAccountUpdate(product)
{
  return new Promise(function(resolve , reject)
  {
    setTimeout(function()
    {
        resolve();
    },2000)
  })
}


module.exports={
    accountUpdate:accountUpdate,
    promiseAccountUpdate: promiseAccountUpdate
}