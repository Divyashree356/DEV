
let inquirer = require('inquirer');
let cp = require('child_process');


function displayList(){
inquirer
  .prompt([
      {
    type : 'list',
    name : 'selection' ,  
    choices: ['ABOUT'   , 'SKILLS' ,'ACADEMICS' ,'PROJECTS']
  
      }])
  .then(function(answer){
    
    if(answer.selection=='ABOUT')
    {
     console.log(`#About Section :   To be A Computer Science Engineer with passion to enhance skills
     through practice and experience . Proven efficiency with an ability
     to quickly learn and navigate any computer software program. Able
     to effectively self-manage during independent projects, as well as
     collaborate as part of a productive team. A creative thinker, adept in
     software development and working with various data structures.
     `);
     displayNext();
    }
     else if(answer.selection=='SKILLS')
     {
     console.log(`#Skills Section :JAVA
                 Problem Solving
                 C++
                 DSA
                 JavaScript
                 Node.JS
                 Web Scraping
       `);
       displayNext();
     }
     else if(answer.selection=='ACADEMICS')
     {
         console.log('#Academics Section');
         cp.execSync('start chrome https://drive.google.com/file/d/1LJwk5Vond4XPrxwRB0K7-hRNaNHViT_K/view?usp=sharing')
         displayNext();
  }

     else if(answer.selection=='PROJECTS')
    { 
        console.log('#Projects Section');
        cp.execSync('start chrome https://github.com/Divyashree356')
        displayNext();
    }
  })
}

displayList()

//for goBack
function displayNext()
{
inquirer
  .prompt([
      {
    type : 'list',
    name : 'selection' ,  
    choices: ['GO BACK =>' , 'EXIT']
  
    }]).then(function(answer)
    {
        if(answer.selection=='GO BACK =>')
         displayList();
        else if(answer.selection='EXIT')
          console.log('Resume Closed');
    })
}