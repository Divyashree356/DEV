

//this is a constructor that is what is a working of constuctor 
//templating on the basis of function
function car(Name , Model , Color)
{
    this.name =Name;
    this.model = Model;
    this.color= Color;

   this.test= function()
   {
       console.log(`i am driving ${this.model}`)
   }
}

let car1= new car('BMW', 'X6' , 'Black');
let car2= new car('Mercedes', 'SUV' , 'Green');

console.log(car1);
console.log(car2);

car1.test();
car2.test();