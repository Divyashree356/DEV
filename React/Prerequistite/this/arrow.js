

//arrow function
//in this we can have implicit return it is not needed to make any return

let sum= (a,b)=>{
     console.log(a+b);
}

sum(3,4);

let js=()=> 'javascript';

console.log(js());


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


let person={
    name: 'divyashree',
    age: 21,

    showDetail:function()
    {
        console.log(this.name+' '+this.age);
    },

    //in arrow  function there is no concept of this 
    showDetailArrow: ()=>
    {
        console.log(this.name+' '+this.age);    //undefined undefined

    }

}

person.showDetail();
person.showDetailArrow();

let test= ()=>
{
     console.log(this);    // in all modes it will give an empty object {}
}

test();

let testNormal=()=>
{
  console.log(this);
}

testNormal();