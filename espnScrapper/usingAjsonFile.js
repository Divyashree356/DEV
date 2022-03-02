const fs = require('fs');
const xlsx = require('xlsx');
//without fs module

let jsonFile = require('./example.json')

// let buffer = fs.readFileSync('./example.json')
//above statement is not required it we use jsonfile format
// console.log(buffer)


//JSON is inbuilt in javascript method 
// let data= JSON.parse(buffer);
//this method is used to convert buffer type data or anyother type of data to json format
//it is not required using  when using jsonFile

// console.log(data)

//pushing a  new object to our jsonfile
jsonFile.push(
    {
        "name": "thor",
        "last name": "odinson",
        "isAvenger": true,
        "friends": ['steve', 'banner', 'spiderman'],
        "age": 25,
        "address":
        {
            "planet": 'assguard'
        }
    }
)

// console.log(data);

let strinData = JSON.stringify(jsonFile);
//converting data to string type so that we can add it to json because any file can be appended by only using a text file
// console.log(strinData)

// fs.writeFileSync('example.json' , strinData);
// console.log('json file updated')

let newWB = xlsx.utils.book_new();
//creating a new workbook
let newWS = xlsx.utils.json_to_sheet(jsonFile);
//json is converted to sheet format
xlsx.utils.book_append_sheet(newWB, newWS, 'Avengers');
//add data to file and append together
xlsx.writeFile(newWB, 'Aven.xlsx');


let wb = xlsx.readFile('Aven.xlsx');
let excelData = wb.Sheets['Avengers'];
let ans = xlsx.utils.sheet_to_json(excelData);
console.log(ans);

