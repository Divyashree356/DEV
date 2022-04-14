

//it works on the basis of event loop , call back queue properties of callback function

// setTimeout(function()
// {
//     console.log('printing after 3sec');
// }, 3000)  //time is passed in milisec

// setInterval(function()
// {
//     console.log('Hello Divyashree');
// },2000)

//set interval is like an infinte loop and to terminate it we use CLEAR INTERVAL

// let count=0;
// let interval =setInterval(function()
// {
//      count+=1;
//      console.log(count);

//     if(count==7)
//      clearInterval(interval);   //it terminate the function it take variable name in which set interval is passed
  
// },2000)

//Example

function greetings(name , role)
{
    console.log(`Hello my name is ${name}`);
    console.log(`By proffesion i am is ${role}`);
}

setTimeout(greetings ,2000, ' Divyashree' , 'Engineer' );

setTimeout( function printName(name)
{
    console.log(name);
},3000 ,'Rajat' );
