//NODE -> NON STRICT MODE

console.log(this) //global area -> empty object

//Inside a function -> return global object
function f()
{
    console.log(this)
}
f();

//Inside a function Inside an object -> return object itself
let obj ={
    name: 'yadav' ,
    f1:function()
    {
        console.log(this)
    }
}


//Inside a function another function in a object-> return global object
obj.f1();
console.log("   `````````````````````````````````````````````````````````````")
let obj2 =
{
    name: 'golu' ,

    f:function()
    {
        function g()
        {
            console.log(this)
        }
   g();
    }

}

obj2.f()