//it is build on stack memory

let a='hello';

console.log(a,typeof(a))   //typeOf tells the type of data stored in  variable

let  b=2;

console.log(b,typeof(b))

let c=true;

console.log(c,typeof(c))

let d=undefined;
console.log(d,typeof(d))

let e=null
console.log(e,typeof(e))  //null returns object which is still a worldwide question 
//it is a bug of js-- 


//we will represent it using stack
let firstPerson= 'Divyashree';
let secondPerson= firstPerson;

firstPerson='Ashutosh'
//access by value
console.log(firstPerson)
console.log(secondPerson)