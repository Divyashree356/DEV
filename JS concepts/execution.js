//Execution Context-  The environement where JS code is executed and evaluated ,these can be made for internal functions also

//Global execution context- by default an exeution context is provided by JS and that is known as global execution 
//context in which the whole code reside


var a=2;
var b=3;

function add(a,b){
    return a+b;

}

var sum1= add(2,3)
var sum2=add(1,2)

console.log(sum1)
console.log(sum2)