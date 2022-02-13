// console.log(a)  //output:-undefined hello

//this is hoisting that is using variables or functions before initializing
// greet();

// var a=2;  


// function greet()
// {
//     console.log('hello')    //beacause in phase1  it values assigns but var a value doesnt assigns it value
// }


//replacing var with let or const - it will give initialization error
//Temporal dead zone - it is j=just a area where if you try to acces a variable
//defined with let and const before initialization it wont be able to do it

console.log(a)  //output:-Cannot access 'a' before initialization 


greet();

let a=2;
function greet()
{
    console.log('hello')    //beacause in phase1  it values assigns but var a value doesnt assigns it value
}
