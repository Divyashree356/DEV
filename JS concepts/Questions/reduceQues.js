//filter out all the positive elements and  calc the total amount

const transction=[100 , 500 , 952 , 584, -1025, 6000 , 5200 , -7451 ]

let positiveElements = transction.filter(function(amt)
{
    if (amt>0)
     return true;
}).reduce(function(total , amt)
{
   return total+amt;
},0)

console.log(positiveElements)
