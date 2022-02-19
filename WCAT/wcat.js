#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

//input
let inputArr = process.argv.slice(2);
// console.log(inputArr);

//options - start with -(dash)

let optionsArr = [];
let filesArr = [];

//here we are identifying ehat options we are having
for (let i = 0; i < inputArr.length; i++) {

  let firstChar = inputArr[i].charAt(0);  //it will take out dash
  if (firstChar == '-') {
    optionsArr.push(inputArr[i]);
  }
  else {
    filesArr.push(inputArr[i]);
  }

}

//options check
let isBothPresent= optionsArr.includes("-n")&& optionsArr.includes("-b")
if(isBothPresent==true)
{
  console.log("either enter -n or -b option")
  return;
}


//existence
for (let i = 0; i < filesArr.length; i++) {
  let isFileNotPresent = fs.existsSync(filesArr[i])
    if(isFileNotPresent== false)
    {
      console.log(`file ${filesArr[i]} is not present`)
      return
    }
}


//read files
let content = "";

for (let i = 0; i < filesArr.length; i++) {
  //buffer
  let bufferContent = fs.readFileSync(filesArr[i])
  content += bufferContent + "\r\n";
  // we add space between the content of the files  
}
// console.log(content)


//we will split the content on the basis of \n
//\r is used by vscode  by default to reach at last of the line
let contentArr = content.split("\r\n");
// console.log(contentArr)

//-s :identify the first option
//-s : it removes extra spaces from our output file

//includes function and we can do it using for loop also
let isSPresent = optionsArr.includes("-s");
if (isSPresent == true) {
  for (let i = 1; i < contentArr.length; i++) {
    if (contentArr[i] == "" && contentArr[i - 1] == "") {
      contentArr[i] = null;
    }
    else if (contentArr[i] == "" && contentArr[i - 1] == null) {
      contentArr[i] = null;
    }
  }
  let tempArr = [];
  for (let i = 0; i < contentArr.length; i++) {
    if (contentArr[i] != null) {
      tempArr.push(contentArr[i])
    }
  }
  contentArr = tempArr;
}
console.log("-------------------------------------")
// console.log(contentArr.join('\n'))


//-n : it gives numbering to line

let isNpresent = optionsArr.includes("-n");
if (isNpresent == true) {
  for (let i = 0; i < contentArr.length; i++) {
    //we are concatenating numbers or indexing with each line of content
    contentArr[i] = `${i + 1} ${contentArr[i]}`;
  }
}
// console.log(contentArr.join("\n"))

//-b :it gives numbering to only those lines which have content no spacing

let isBpresent = optionsArr.includes("-b");
if (isBpresent == true) {
  let counter = 1;
  for (let i = 0; i < contentArr.length; i++) {
    //we are concatenating numbers or indexing with each line of content
    if (contentArr[i] != "") {
      contentArr[i] = `${counter} ${contentArr[i]}`;   //adding numbering 
      counter++;
    }
  }
}
console.log(contentArr.join("\n"))

//inbuilt features of browser
//--node .\wcat.js -b -s  f1.txt f2.txt >f6.txt
//this is inbuilt feature of a browser it will copy the conetent of file in another file if file isnt present
//then it will make the file

//node .\wcat.js -b -s  f1.txt f2.txt >>f6.txt
//it appends into an existing file
