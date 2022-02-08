//figlet is a npm module which is externally download 

const fig= require('figlet')

var figlet = require('figlet');


//figlet take text and a function , if it cannot process the text than it will design the text otherwise it will return error
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});