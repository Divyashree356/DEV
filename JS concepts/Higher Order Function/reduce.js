let arr= [2 , 4 ,56, 7, 3 , 6, 4 ]


//reduce always return a single value it reudce all the elements in a singlr array

let addition = arr.reduce(function(sum  ,value)   //sum is a accumulator
{
   let updatedSum= sum+ value;
   return updatedSum
},0)   //defining sum=0 ie specifying accumulator

console.log(addition)

let multiplication = arr.reduce(function(product , value)
{
    let updatedMul= product*value;
    return updatedMul
},1)

console.log(multiplication)
