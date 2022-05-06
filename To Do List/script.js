
let addbtn = document.querySelector('.add-button');
let mainCont= document.querySelector('.main-cont');
let addFlag= false;
let removeFlag=false;
let color= ['pink' , 'blue' , 'green' , 'black'];
let allPrioirityColors= document.querySelectorAll('.priority-color');
let textArea= document.querySelector('.textarea-cont')
let removeBtn= document.querySelector('.remove-button')

let priorityColor= color[color.length-1];  //by default- black

let lockClass= 'fa-lock';
let unlockClass= 'fa-lock-open';
 


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
      createTicket(priorityColor , textArea.value);  //it will create ticket
      modelContainer.style.display='none'
      addFlag= false;
        }
 });


 //changing priority color

 allPrioirityColors.forEach(function(colorEle)
 {
     colorEle.addEventListener('click' , function(e)
     {
         allPrioirityColors.forEach(function(currColorEle)
         {
             currColorEle.classList.remove('active');
         })
         colorEle.classList.add('active');

         priorityColor= colorEle.classList[0];
     })
 })

 function createTicket(ticketColor , ticketValue)
 {
     let ticketCont= document.createElement('div');
     ticketCont.setAttribute('class' , 'ticket-cont');
     ticketCont.innerHTML=` <div class="ticket-color ${ticketColor}">

     </div>
     <div class="ticket-id">
        
     </div>
     <div class="task-area ">
       ${ticketValue}
     </div>
     <div class="lock-cont">
         <i class="fa-solid fa-lock"></i>
     </div>`

     mainCont.appendChild(ticketCont);
     handleRemover(ticketCont);
     handlelock(ticketCont);
 }

 removeBtn.addEventListener('click' , function(e)
 {
   removeFlag= !removeFlag;
   if(removeFlag==true)
      removeBtn.style.color='blue';
    else
      removeBtn.style.color='black';

 })


 //remove ticket function
 function handleRemover(ticket)
 {
     ticket.addEventListener('click' , function(e)
     {
         if(removeFlag==true)
         {
             ticket.remove();
         }
     })
 }
 

 //function for lock and unlock

 function handlelock(ticket)
 {
  let ticketlockEle = ticket.querySelector('.lock-cont');
  
  //taking out children of div element
  let ticketLock= ticketlockEle.children[0];
  let ticketTaskarea= ticket.querySelector('.task-area');

  ticketLock.addEventListener('click' , function(e)
  {
        if(ticketLock.classList.contains(lockClass))
        {
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unlockClass);
            ticketTaskarea.setAttribute('contenteditable', 'true');
        }
        else{
            ticketLock.classList.remove(unlockClass)
            ticketLock.classList.add(lockClass)
            ticketTaskarea.setAttribute('contenteditable', 'false');

        }
          
  })

 }