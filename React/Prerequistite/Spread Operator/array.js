
let arr=[1,2,3,4];

let arr2=[...arr];  //shallow copy of arr
//new adress is given to arr2 

arr.push(5);  // now this will not be added to arr2 as it was before without array operator
arr[1]=67;

//spread operator ... represent spread operator 
// it sends array to other memory space
//basically it removes the refrenve to another memory when assigning one array to another

console.log(arr);
console.log(arr2);

