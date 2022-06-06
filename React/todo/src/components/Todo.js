
import React, { Component } from 'react'

export class Todo extends Component {

    constructor()
    {
        super();
        this.state=
        {
            tasks:[],
            currtask:"",
        }
    }

    handelChange=(e)=>{
        console.log(e.target.value)
        this.setState(
        {
            currtask:e.target.value,
        })
    }

    handleAddTask=()=>
    {
        this.setState({
            tasks:[...this.state.tasks , {task:this.state.currtask , id:this.state.tasks.length+1}],
            currtask:""
        })
    }

    handleDelete=(id)=>
    {
     let narr= this.state.tasks.filter((filterObj)=>{
            return filterObj.id != id
     })

     this.setState({
         tasks: [...narr]
     })
    }
  render() {
    return (
      <div>
          <input type='text'value={this.state.currtask} onChange={this.handelChange}/>
           <button onClick={this.handleAddTask}>Add text</button>


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
                           <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
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