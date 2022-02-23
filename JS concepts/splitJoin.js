
//split
//split function will split a string according to the passed parameter and will  return
//left and right part of the string into an array

let str= 'divyashree';

let partOfString = str.split('y');

console.log(partOfString);  //it makes array of splitted str

//JOIN
//JOIN function will take the array and it will fill the empty spaces with passed parameter
//and will return the complete string

let joinedStr= partOfString.join('y');
console.log(joinedStr)  //convert splitted array of string into an array