

//function here expects two  call back functions
//construction of promise
// let myPromise = new Promise(function(resolve , reject)
// {

// })

let promise = new Promise(function(resolve , reject)
{
    let a='Divyashree';
    let b='ivyashree';

    if(a===b)
     resolve('yes strings are equal');

    else 
     reject('no they are not equal');
})

promise.then(function(data)
{
    console.log('from resolve  ' + data)
})

promise.catch(function(data)
{
    console.log('from reject  ' + data)
})