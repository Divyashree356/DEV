//File System Module

const fs= require('fs')
const path= require('path') //importing path module

//reading writing updating and deleting


//Reading data
let content =fs.readFileSync('f1.txt')
console.log('this is f1 data->'+content)

//Writing data to file
fs.writeFileSync('f2.txt','data to be written in this file')
console.log('data written')

//if the name passed does not exist then a new file will be created and the data will be added to it
fs.writeFileSync('f3.txt','this file is not present in the folder it will automatically create thi file')
console.log('file created and data written')

//Append data - it add new data to previously written file it add the data doesnot overwrite the data
fs.appendFileSync('f2.txt',' this is the appended data')
console.log('appended data')

//Delete file
fs.unlinkSync('f3.txt')
console.log('f3 deleted')


            //*DIRECTORIES*//

//Creating a directory
//mkDir - is used to create a new directory or folder

fs.mkdirSync('myDirectory')
console.log('directory created')

//delete a directory

fs.rmdirSync('myDirectory')
console.log('deleted directory')

//Check if directory exists or not

let does=fs.existsSync('myDirectory')  //it return either true or false based on passed folder is present or not
console.log(does)

let filedoes=fs.existsSync('f1.txt'); // it can be used to check file also
console.log(filedoes)

//Details of directory

let stats=fs.lstatSync('myDirectory')
console.log(stats)

console.log('isFile?', stats.isFile()) // it is used to check wether a docuemnt is file or folder return true or false


//Reading the content of a particular directory
let folderpath='C:\\DEV\\Node JS\\myDirectory'
let foldercontent= fs.readdirSync(folderpath);
console.log('folder content  '+  foldercontent)

//Copying Files

//source file , destination file

let srcFilePath='C:\\DEV\\Node JS\\myDirectory\\f3.txt'

let destinationPath="C:\\DEV\\Node JS\\myDirectory2"

let fileToBeCopiedName =  path.basename(srcFilePath);
console.log(fileToBeCopiedName);

let finaldestPath= path.join(destinationPath, fileToBeCopiedName);
console.log(finaldestPath);

fs.copyFileSync(srcFilePath, finaldestPath);
console.log("file copied")






