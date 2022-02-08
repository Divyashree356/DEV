//child process is a node module used to create sub process
//diffrent tasks can be performed using child module externally


const cp= require('child_process') // it is recommended to use const while working with a module

console.log('trying to use calculator');

cp.execSync('calc')
//execSync is used to execute a command it is used to create a subprocess

console.log("trying to open vscode")
cp.execSync('code .')

console.log('trying to open pepcoding')
cp.execSync('start chrome https://www.pepcoding.com/resources/')

const output= cp.execSync('node test.js') //it is used to run other file and then we print the output
console.log('output->'+output);

