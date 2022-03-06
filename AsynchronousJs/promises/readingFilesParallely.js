const fs= require('fs')

let f1p= fs.promises.readFile('f1.txt')

let f2p= fs.promises.readFile('f2.txt')

let f3p= fs.promises.readFile('f3.txt')


// console.log(f1p)

// console.log(f2p)

// console.log(f3p)

function callBack(data)
{
    console.log( 'file data-> '+data);
}
f1p.then(callBack);
f2p.then(callBack)
f3p.then(callBack)