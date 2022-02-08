//normal function

function sayHi() //function declaration
{
    console.log('hii')
}
sayHi(); //function invokation

//parameter in function 
function add(a,b)
{
    console.log('additon is ', a +b);
}
add(2 ,3);

//return 
function multiply(a , b)
{
   return a*b
}//console.log(multiply(4 , 5)); // one way

let b=multiply(2,3) //second way
console.log(b)


//function as first class citezen
//js does not find any diffrence btw functions and variables

let sayHello=function(){  //anonymous function
    //variable can be treated as function 
    console.log('hello')
}//function exprerssion
sayHello()

//IIFE (Immediatly Invoked Fuction Expression)

let addIIFE=(function(a,b)
{
 return a+b;
}
)(10 ,20)
console.log(addIIFE)