//browser + non strict

//window object and global object are not same
// console.log(this)  //retrun window object


//Inside a function -> window object
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

////Inside a function another function inside an object-> return window object
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


