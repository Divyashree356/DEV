//prime number using for loop in js

var flag=true;

var num=13;

for(var i=2;i*i<=num;i++)
{
    if(i%num==0)
      {
          flag=false;
        break;
      }
    }
      if(flag==true)
      {
      console.log('number is prime');
      }
      
      else
      {
      console.log('not prime');
}

