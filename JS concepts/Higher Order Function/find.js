const transaction=[1000 , 582 , 236, 7452 , 3000 , -256 , -74 ]
//it works on the first element of the array only which satisfies the conndition
//returns that element of the array not an array


const firstWithdrawal =  transaction.find(function(v)
{
    return v<0
})

console.log(firstWithdrawal)