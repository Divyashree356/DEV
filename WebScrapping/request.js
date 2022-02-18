const request = require('request');

console.log('before')

//request module expect a link and  a call back function
request('https://www.worldometers.info/coronavirus/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  //used to print error

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 console.log('body:', body); // Print the HTML for the Google homepage.
});

//status code- 200 stands for sucess .it is a acknowledgement message this is a status code . if status code is 200 then sucess 
//and we have diffrent codes for failure

console.log('after')
//checking asynch behaviour- to make it fast
