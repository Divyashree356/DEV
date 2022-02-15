//Callback Function- any function that is passed to another function as a argument 
//it is callback function

//functions are treated as variables in javascript
//webscraping is application of callback function

//Asynchronous improve speed of js 
const fs= require('fs');

function printFirstName(firstName,cb , cb2)
{
        console.log(firstName)
        cb('Agrawal')      
        cb2(12)              ///passing argument to a functio using  variable
}


function printLastName(lastname)
{
console.log(lastname)
}

function ageN(age)
{
    console.log(age)
}
printFirstName('Divyashrree', printLastName , ageN)    //printname used as argument to printFirstName function
printLastName('agrawal')

// Synchronous and Asynchronous way of callBacking

// Synchronous way of reading file- working line  by line
// it is a problem when we have a large file then our code will get stuck so we se callback function
 
console.log('before')

let data= fs.readFileSync('trial1.txt');
console.log(' '+data)

console.log('after') 

//asyncronous way of reading 
//read file - it expects a call back function

 
console.log('before')

fs.readFile('trial1.txt' , cb);   //readFile is a asynch function
fs,fs.readFile('trial2.txt' , cb2);

//whenever we deal with error in our callback function first, we call it error first function

//it will move to call stack only when it is empty , event loop checks for it
function cb(err , data )
{
if(err)
{
    console.log(err)
}  
        console.log(' '+data)
}
function cb2(err , data )
{
if(err)
{
    console.log(err)
}  
        console.log(' '+data)
}
// console.log(' '+data)

console.log('after')

//order can be any of output either file1 or file2 any of them can be read first
