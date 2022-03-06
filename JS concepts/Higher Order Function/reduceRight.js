let arr= [2 , 4 ,56, 7, 3 , 6, 4 ]


let additionFromRight = arr.reduceRight(function(sum  ,value)   //sum is a accumulator
{
   let updatedSum= sum+ value;
   console.log(updatedSum)
   return updatedSum
},0)   //defining sum=0 ie specifying accumulator

console.log(additionFromRight)


