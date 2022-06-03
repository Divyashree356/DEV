
//templating on the basis of class


//in class we cna make function without using any function keyword becuase it will give error
class Person{
    constructor(name , age )
    {
        this.name= name;
        this.age= age;
       
    }

    welcome()
    {
        console.log(`hello ${this.name}`)
    }
}

let person1=new  Person('Divyas' , 21 );

console.log(person1);

class Teacher extends Person{
     constructor(name , age, classStr)
     {
         super(name , age);
         this.classStr= classStr;
     }
}

class Student extends Person{
    constructor(name , age, gpa)
    {
       super(name , age);
        this.gpa= gpa;
    }

    hello()
    {
        super.welcome();
    }
}

let teacher1 = new Teacher('Aman' , 22 ,100);
let student1= new Student('Mark' , 17 , 8.0 )
console.log(teacher1);
console.log(student1);

person1.welcome();
student1.hello();