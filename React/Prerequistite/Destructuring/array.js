
//array
let arr=['hi' , 'i', 'am' , 'mrinal'];

//destructuring

let[a,b,c,d]= arr;

console.log(a , b,c, d);

let[e,f,,g]=arr;

console.log(e,f,g);

let[w,r,s,t,y='bye']=arr;
console.log(w,r,s,t,y);

//objects

let obj={
    name:"divyashree",
    age:23,
    state: 'UP'
}

let{name , age , state}= obj;

console.log(name , age , state);

//nested object

let obj2={
   name: "Adam",
   address:
   {
       country:"India",
       state:{
           stateName: "UP",
           pincode:5545554,
       }
   }
};

let{ address: {country:cd} }=obj2;

let{address: {state:{pincode:st}}}=obj2;


console.log(st);
console.log(cd);