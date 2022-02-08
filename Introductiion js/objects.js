//In  JS Objects are basically key-value pair

//Declaration

let obj= {}//object declared

let person={
    name: 'Divyashree', //here name is the key and divyashree is the value
    age: 20,
    phone: 9500

}
console.log(person)

let cap={
    firstname: 'Steve',
    lastname: 'rogers',
    friends: ['tony','bucky','Dr.Banner'], //array can be added to an object
    Age: 102,
    isAvenger:true,

    Adress: { //Nested Object
            state:'manhattan',
            city:'new york'
    },

    sayHi:function(){ //function can be added to object
         console.log(('captain said hii'))
    }
}


console.log(cap)
console.log(cap.firstname) //acces a property of an object
console.log(cap.lastname)
console.log(cap.Age)

console.log('my best friend is ',cap.friends[1]) //my best friend is  bucky

//accesing property of nested object
console.log(cap.Adress.city)
console.log(cap.Adress.state)

//bracket notaition
console.log(cap['firstname']) //steve


//accesing functions in objects
cap.sayHi() //captain said hii


//Loops- for in loop  
//it is used to loop on objects

for(let key in cap){
    console.log("Key: ", key, '   Value: ', cap[key])
}

cap.isAvenger=false //update property of an object

cap.movies=['age of ultron' , 'first aveneger'] //add new property to an object

console.log(cap)

//delete property from object

delete cap.Age
console.log(cap)

// if we define cap as const type variable  the also we can 
//change its value because it is a referenced type value




