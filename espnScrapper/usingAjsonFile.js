const fs= require('fs');

let buffer = fs.readFileSync('./example.json')
// console.log(buffer)


//JSON is inbuilt in javascript method 
let data= JSON.parse(buffer);

// console.log(data)

data.push(
    {
        "name" : "thor" ,
        "last name" : "odinson" ,
        "isAvenger" : true ,
        "friends" : [ 'steve', 'banner', 'spiderman' ],  
        "age" :25 ,
        "address":
                    {
                      "planet" :'assguard'
                    }
    }
)

// console.log(data);

let strinData = JSON.stringify(data);
// console.log(strinData)

fs.writeFileSync('example.json' , strinData);

console.log('json file updated')

