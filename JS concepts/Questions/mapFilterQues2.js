//You have to use map function and have to get all the students name in upperCase
//Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord
//use filter method to approach the problem

let studentRecords = [
    { name: "Abhishek", id: 123, marks: 98 },
    { name: "Udai", id: 101, marks: 90 },
    { name: "Himanshu", id: 200, marks: 96 },
    { name: "Mrinal", id: 115, marks: 75 },
  ];

  let nameToUpperCase = studentRecords.map(function(n)
  {
      return n.name.toUpperCase();
  })

  console.log(nameToUpperCase);

  let studentDetails = studentRecords.filter(function(n)
  {
      if(n.marks>50 && n.id>120)
       return true;
  })

  console.log(studentDetails)