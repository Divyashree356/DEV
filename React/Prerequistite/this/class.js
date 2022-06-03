
//templating on the basis of class

class Person{
    constructor(name , age )
    {
        this.name= name;
        this.age= age;
       
    }
}

let person1=new  Person('Divyas' , 21 , 'F');

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
}

let teacher1 = new Teacher('Aman' , 22 ,100);
let student1= new Student('Mark' , 17 , 8.0 )
console.log(teacher1);
console.log(student1);