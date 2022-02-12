//we are building a command line project 

//how can we give command on cmd
//FILE SYSTEM ORGANIZER //
//Features of the project-
//If you have numerous file in a folder and they are not properly arranged
//So you can this tool to arrange them in specific directory according to their extension  
//like text files will go into text file folder  , .exe file will go into appliaction folder 
//so at he end you will have a arranged set of files in specific folders

//in js input is given in the format of array process.argv


// let input=process.argv[2];  //process.argv it treat each word as a indexed element any string or integer
//it treat command as array , it just print output  -argv:argument vector

const helpModule =require('./Commands/help')
const organizeModule = require('./Commands/organize')
const treeModule = require('./Commands/tree')

let inputArr = process.argv.slice(2); // to take multiple iput we use slice it remoeves input before 2 index



const { dir } = require("console");
const fs = require("fs")  //importin fs module
const path = require('path');  //importing path module
const { dirname } = require("path/posix");
//console.log(input)  

let command = inputArr[0];  ///tree , help ,organize

switch (command) {
    case 'tree':
        // console.log('tree implemented')
        // treeFn(inputArr[1])
        treeModule.treeKey(inputArr[1])
        break;

    case 'help':
        // console.log('help implemeted')
        helpModule.helpkey();
        break;

    case 'organize':
        // console.log('organize command')
        organizeModule.organizeKey(inputArr[1])
        // organizeFn(inputArr[1]);               //input to be given as node .\FO.js organize 'C:\DEV\test folder'
        break;

    default:
        console.log('give correct input')   // if no command is given or incorrect command is given
        break;
}






