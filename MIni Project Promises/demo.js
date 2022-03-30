
let inquirer = require('inquirer');


// var inquirer = require('inquirer');
inquirer
  .prompt([
      {
   //this is  a question which is passed in the format of objects
    type : 'list',
    name : 'selection' ,  //it keeps track of what is seleted from the choice key
    choices: ['choice 1'   , 'choice 2']
  
      }]) 
      //in answer we have choices which we have selected
  .then(function(answer){
    
    if(answer.selection=='choice 1')
     console.log('choice 1 selected');
     else
      console.log('choice 2 selected ')

  })
