function add(a,b)
{
    console.log('adddition is',a+b)
}

function mul(a,b)
{
    console.log('multipiaction is ',a*b)
}

function sub(a,b)
{
    console.log('substraction is',a-b)
}
function div (a,b){
    console.log('division is',a/b)
}

module.exports={   //object for module has been created
        addition:add,
        substraction:sub,
        mutilpy:mul,
        division:div

}

//module.export is a object provided by node js 
// by which you can export your functions in key value pair
// you will use your functon with  the keys  you have assigned to  them
