//Higher order function are functions that operate on other functions
//either by taking them as argument or returning them as output
//In simple words, a higher order function is a function that recieves a function as an argument
//or return the function as output


//callback function are not asynchronius by default
//when it is called by an asynchronous function it behsve like asynchronous

let arr = [2, 5, 9, 6, 5, 8, 13];

//square of array
// for(let i=0;i<arr.length;i++)
// {
    
// }
//without for loop


//Map can be used - it is only array function
//Map is itself a function , it expects a callback function as an argument
//map will call the callback function
//map will process every value and will apply the instruction that inside the call back function
//map returns a new array- it will not manipulate the existing array
let sqarr= arr.map(function square(v)
{
    return v*v;
})

console.log(sqarr);

console.log(arr)

let nameArr= ['Divyashree' , 'Ashutosh'];

let printArr= nameArr.map(function(n)  //giving name to a function is not mandatory
{
    return n;
})

console.log(printArr)


let nameArr2 = [ 'Divyshree Agrawal ' , 'Ashutosh Yadav', 'Sheena Chaturvedi'];

let nameSplit= nameArr2.map(function(n)
{
    let partsOfName= n.split(" ");
    let firstname= partsOfName[0];
    let lastNAme= partsOfName[1];
    // return firstname;
    return lastNAme;
})

console.log(nameSplit);

const transaction=[1000 , 582 , 236, 7452 , 3000 , -256 , -74 ]
const inrToUsd= 74;

let rupees= transaction.map(function(n)
{
    //  return n*inrToUsd;
    return (n/inrToUsd).toFixed(0);
})
 
console.log(transaction)
console.log(rupees)