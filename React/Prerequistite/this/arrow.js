

//arrpw function

let sum= (a,b)=>{
     console.log(a+b);
}

sum(3,4);


let arrowFunction= ()=>{
    console.log("i am a arrow function =>");
}

let regularFunction = function(){
    console.log("I am a regular function");
}

let namePr= name => console.log(`I am  ${name}`)   //this syntax work for only one line an dwe have only one parameter , we do 
//  need bracket if we have single parameter but i is not applied if we hvae multiple functions


arrowFunction();
regularFunction();
namePr("divya");