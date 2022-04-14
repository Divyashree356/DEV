//a function that is passed to another function in the form of argument is called callBack function

function printName(firstName , cb)
{
    console.log(firstName);
    cb('yadav');
}

function printLastName(lastname)
{
    console.log(lastname);
}

printName('ashutosh' , printLastName);