//node + strict

'use strict'

//global - empty object
console.log(this)



//Inside a function ->return undefined
function f()
{
    console.log(this)
}

f();

//Inside a function inside a object ->retrun function itself
let obj=
{
    name: 'dolu',
    f: function()
    {
        console.log(this)
    }

}

obj.f();



//Inside a function another function  inside it inside a object ->retrun undefined
let obj2=
{
    name: 'ashutosh',
    f: function()
    {
        function g()
        {
            console.log(this)
        }
        g();
    }

}
 obj2.f();