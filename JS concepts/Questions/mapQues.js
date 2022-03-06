const product =[
    {name : "tshirt" , price : 25 },
    {name : "headPhone" , price : 125 },
    {name : "keyBoard" , price : 75 },
    {name : "monitor" , price : 200},

];

//Get the number of product that is atleast 100

let productAbove100 = product.filter(function(n)
{
    if(n.price>100)
    return true;
}).map(function(v)
{
    return  v.price;
}).length

console.log(productMap)