
//Filter->
//Flter works on boolean values
//Filter returns a new array contining array elements that specify the given condition
//if the condition stands true it will filter out those elements in a new array


let arr= [ 1,5,3,8,12,75,41,22,18,6,32,]
//need to take out all even numbers

let evenNoArr= arr.filter(function(n)
{
    if(n%2==0)
    return true;

    // else
    // return false;
})

console.log(evenNoArr)


const transaction=[1000 , 582 , 236, 7452 , 3000 , -256 , -74 ]

let profit = transaction.filter(function(n)
{
    if(n>0)
     return true;
})

console.log(profit);