let obj=
{
   name: "Adam",
   address:
   {
       country:"India",
       state:{
           stateName: "UP",
           pincode:5545554,
       }
   }
};

let obj2= JSON.parse(JSON.stringify(obj));  //deep cpy

// let obj2= {...obj , address:{...obj.address.state}};  //apply spread operator 

obj.name="Divya"
obj.address.country="USA";
obj.address.state.pincode= 11515;

console.log(obj);
console.log(obj2);

