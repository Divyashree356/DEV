//path module is another module in node js
const path= require('path');

let ext= path.extname('C:\\DEV\\Node JS\\f2.txt')  //it is used to get extension name of any file
console.log('extension name-'+ext)


let basename= path.basename("C:\\DEV\\Node JS\\f2.txt")
console.log('base name ->'+basename)

//directory address of current file
console.log(__dirname)

//current file path
console.log(__filename)