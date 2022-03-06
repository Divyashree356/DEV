const fs= require('fs');

console.log('before')

let fileReadF1= fs.readFile('f1.txt' , cb1);



function cb1(err , data)
{
    if(err)
     {
         console.log(err);
     }
     else
     {
     console.log('f1 data->  '+ data);
      fs.readFile('f2.txt' , cb2);
     
  }
}

function cb2(err , data)
{
    if(err)
     {
         console.log(err);
     }
     else
     {
     console.log('f2 data->  '+ data);
     fs.readFile('f3.txt' , cb3);
    
  }
}

function cb3(err , data)
{
    if(err)
     {
         console.log(err);
     }
     else
     {
     console.log('f3 data->  '+ data);
  }
}

console.log('after')

//here the sequence remain same all time whenever we execute the code