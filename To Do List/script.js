
let addbtn = document.querySelector('.add-button');
let addFlag= false;

let modelContainer= document.querySelector('.model-cont')
addbtn.addEventListener('click' , function(e)
{
    //display model 
    //add fla ->true then we have to display model otherwise hide
  addFlag = !addFlag;
  if(addFlag)
  {
      modelContainer.style.display="flex";
  }
  else
   modelContainer.style.display='none';


})

