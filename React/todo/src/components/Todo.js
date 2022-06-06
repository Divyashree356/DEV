
import React, { Component } from 'react'

export class Todo extends Component {

    constructor()
    {
        super();
        this.state=
        {
            tasks:[{task:'get milk' , id:1} ,{task:'study' , id:2}],
            currtask:""
        }
    }
  render() {
    return (
      <div>
          <input type='text'/>
           <button>Add text</button>


{/* after taskobj we make arow function there in general we use {} such
brackets but here we use () brackets because it automaticlly return the
content inside it if we use curly brackets then we have to return it 
explicitly  */}
           <ul>
               {
                   this.state.tasks.map((taskObj)=>
                   (
                       <li>
                           <p>{taskObj.task}</p>
                           <button>Delete</button>
                       </li>
                   ))
               }
           </ul>
      </div>
    )
  }
}

//export default is used only once in the component but export can be used multiple times
export default Todo