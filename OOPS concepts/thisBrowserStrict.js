//browser + strict

'use strict'

// console.log(this)  //retrun window object


// Inside a function -> return undefined
function f()
{
    console.log(this) 
}

// f();


//Inside a function inside an object-> return object itself
let obj=
{
    name:'baby' ,
    f: function()
    {
        console.log(this)
    }
}
// obj.f()

////Inside a function another function inside an object-> return undefined
let obj2=
{
    name:'baby' ,
    f: function()
    {
        function g(){
        console.log(this)
    }
    g();
}
}
obj2.f()


