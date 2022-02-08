//arrays are ordered collection of elements

let arr= []; //array declaration -no need to specify datatype

let cars=['fortuner' , 1,true  , null] //array initialized
console.log(cars)

//any type of values can be stored in array no specific datatype

let car2=['ferrari' , 'bmw' , 'jaguar' , 'city']
console.log(car2[1]);
console.log(car2[0]);
console.log(car2[3]);
console.log(car2[2]);


//Replace an element of an array

car2[2]='fortuner'
console.log(car2);

//Add a new element

car2[4]='mercedes'
console.log(car2);

//adding elements random index

car2[7]='maruti';
console.log(car2);


//Array Methods->

//POP METHOD()-it removes last element from the array

console.log(car2.pop()) //Maruti will pop
console.log(car2)       // we will not find maruti in our array

//PUSH METHOD()- add element at the end of the array

car2.push('Rolls royce'); 
console.log(car2); 

//Shift method -removes element from the strating of an array  

console.log(car2.shift())  //remove ferrari
console.log(car2);

//Unshift method- add element

car2.unshift('martin');
console.log(car2);

//length of an array

console.log(car2.length)

//Multidim Arrays

let matrix=[
      [1,2,3],
      [4,5,6],
      [7,8,9]
]

console.log(matrix[0][0])


