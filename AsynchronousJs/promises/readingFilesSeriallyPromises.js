let fs = require('fs');

console.log('before')

let f1P = fs.promises.readFile('f1.txt');

f1P.then(cb).then(cb2).then(cb3).catch(function(err)
{
    console.error(err)
})

function cb(data) {
    console.log("F1 DATA->" + data);
    let f2P = fs.promises.readFile('f2.txt');

    // f2P.then(cb2);
    return f2P;

}

function cb2(data) {
    console.log("F2 DATA->" + data);
    let f3P = fs.promises.readFile('f3.txt');

    // f3P.then(cb3);
    return f3P;
}
function cb3(data) {

    console.log("F3 DATA->" + data);

}

console.log("after")

//IMPROVEMENT ->



