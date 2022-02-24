let arr = [
    {name: "A", age: 14, gender: "M"}, 
    {name: "B", age: 34, gender: "M"}, 
    {name: "C", age: 24, gender: "F"}, 
    {name: "D", age: 44, gender: "F"}, 
    {name: "E", age: 44, gender: "M"}, 
    {name: "I", age: 28, gender: "F"}, 
    {name: "G", age: 36, gender: "M"}, 
    {name: "H", age: 47, gender: "F"}
]

//Age of all ladies

let ladiesAge = arr.filter(function(l)
{
  if(l.gender=='F')
   return true;

   else
    return false;

}).map(function(n)
{
    return n.age;   // this is substitued method called as filtr map chain
})

// //it will takeout age from our ladies array
console.log(ladiesAge)

// let Age= ladiesAge.map(function(a)
// {
//     return a.age;
// })

// console.log(Age)


