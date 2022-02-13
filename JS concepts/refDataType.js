//it is built on heap datatype

let arr=[1,2,3,]
console.log(arr,typeof(arr))   //we get object as typeof

let obj={
        name: 'divya',
        age: 21
}
console.log(obj ,typeof(obj))

function greet(){
    console.log('hello')
}
console.log(greet , typeof(greet))   //we get function returned as type of but in classification we treat as object only 

let firstPerson=
{
        name:   'hitesh',
        age:22
}
let secondPerson=firstPerson;
secondPerson.name ='divyashree'
//access by refernce
console.log(firstPerson)
console.log(secondPerson)

//output:{ name: 'divyashree', age: 22 }
//{ name: 'divyashree', age: 22 }  --because here we use heap memory