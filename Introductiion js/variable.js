console.log('hello browser')

var a; //by default it is assigned with undefined
console.log('a')

var a=2; //can be assigned to any datatype
console.log(a)

var a=  'i am a string'; //by default  last initialized is used for operation
console.log(a)

//JS is dynamially typed language ie datatype isnt specified

//Datatype in JS- number , string , boolean , undefined, null

var b=2.3; // as a number
var c= 'd' //string

//Problem with var 

            //1 problem

var b='bye';

var b='hello';

console.log(b); //print hello

//Overcome using let 
// let b='bye';

// let b='hello';

// console.log(b); //give error

let d='bye';
console.log(d); 

d='hello'; //here w are reassinging the value which is required
console.log(d);

            //PROBLEM OF SCOPING

if(10%2==0)
{
    var a=2;
    console.log(a);
}
console.log(a); //it will print which is a problem

//Resolving using let 

if(10%2==0)
{
    let e=2;
    console.log(e);
}
// console.log(e); //it will be not defined because it  is out of scope



//CONST

const f=3;
console.log(f); //it acn not be reassigned or redefined

// f='i am string' //not allowed
// f=30 ; //not allowed 