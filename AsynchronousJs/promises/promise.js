const fs = require('fs');

console.log('before')

// fs.readFile('f1.txt' , function( err , data)
// {
//     if(err)
//      console.error(err)

//      console.log('file data-> ' + data)


// })

//Pending stage
let promise = fs.promises.readFile('f1.txt')
// console.log(promise);

//when promise get fullfilled
promise.then(function (data) {
    console.log('file data->' + data)
})

console.log('after')

let promise2 = fs.promises.readFile('f3.txt')
// console.log(promise);


promise2.then(function (data) {
    console.log('file data->' + data)
})

//it run when our promise gets rejected
promise2.catch(function (err) {
    console.error(err);
})

console.log('after')