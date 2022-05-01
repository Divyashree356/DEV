
let addbtn = document.querySelector('.add-button');
let mainCont= document.querySelector('.main-cont');
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
 //generate ticket
 modelContainer.addEventListener('keydown' , function(e)
 {
     let key = e.key;
     if(key == 'Shift')
      {
          createTicket(); //it will create ticket
      modelContainer.style.display='none'
      addFlag= false;
        }
 });

 function createTicket()
 {
     let ticketCont= document.createElement('div');
     ticketCont.setAttribute('class' , 'ticket-cont');
     ticketCont.innerHTML=`   <div class="ticket-color">

     </div>
     <div class="ticket-id">

     </div>
     <div class="task-area">

     </div>`

     mainCont.appendChild(ticketCont);
 }


