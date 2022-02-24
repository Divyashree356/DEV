// Some: Conditon Check: To get true or false based on a condition 
//it will return true if 1 or more that 1 element satisfies the condition -

const transaction=[-1000 , -582 , -236, -7452 , -3000 , -256 , -74 ]

let anyDeposit = transaction.some(function(n)
{
    return n>0 
})

console.log(anyDeposit)

//Every
// const transaction=[-1000 , -582 , -236, -7452 , -3000 , -256 , -74 ]

let anyDeposi = transaction.some(function(n)
{
    return n<0 
})

console.log(anyDeposi)