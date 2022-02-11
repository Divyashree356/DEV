//String is a sequence of character

let str='pepcoder'
console.log(str);

//Methods-

//Length of String 
console.log(str.length);

//Extraction  a part of a string

//SLICE
//slice(start , end+1)

let slicedStr= str.slice(3,7);
console.log(slicedStr)

//SUBSTR
//substr(start ,length)
let substring= str.substr(3,4) //it is depricated
console.log(substring)

//Replacing String content -Mutable

let sayHello='hello palak'
console.log(sayHello)

//Replace Method

let sayBye = sayHello.replace('hello' ,'Bye')
console.log( sayBye) //bye palak

//toUpperCase and ToLowerCase

let text1='hello world'
let text2= text1.toUpperCase()
console.log(text1)
console.log(text2)

let text3='BYE WORLD';
let text4= text3.toLowerCase()
console.log(text3)
console.log(text4)

//Concatenation (Conacat Method)

let firstString='hello'
let secondString='ashutosh'

let concatenation= firstString.concat(" ",secondString) 
console.log(concatenation)  //hello ashutosh

//Trim Method -remove all the white spaces

let text='         hello  world          '
console.log(text) //output with unnecesary spaces

let trimmedText= text.trim();
console.log(trimmedText)


