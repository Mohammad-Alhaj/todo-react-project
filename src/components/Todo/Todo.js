import { useState,useContext } from "react";
import { SettingsContext } from "../../Context/Context";
import shortid from "shortid";
import Tasks from "./Tasks.Todo";
import {Form} from 'react-bootstrap';
import './Todo.css'

function Todo(){
const {item,setItem,setTodoToShow} = useContext(SettingsContext)
const [todo,setTodo,] = useState('')

function handleTodoItems(e){
e.preventDefault()

    const data ={
        id:shortid.generate(),
        text:todo,
        complete:'false',
    }
// console.log([...data])

    setItem([...item,data])
    e.target.reset()
    e.target.focus()
}

function handleChange(e) {
setTodo(e.target.value)
}

const handleChanges = (e)=>{
    const state = e.target.value;
    setTodoToShow(state)

}


const handleDeleteAll = (e)=>{
e.preventDefault()
setItem([])
}
const handleAllComplete = (e)=>{


     item.forEach(ele=> {
        ele.complete === 'true'?ele.complete='false':ele.complete='true'
    });
    console.log('From result',item);
  setItem([...item])
}
const removeCompleteTasks = ()=>{
  let result =  item.filter((ele)=>ele.complete !== 'true')

  setItem(result)
}



    return(
    <div className="todo">
        <div className="todos">
            <div className="container">
                <div className="form_add">

<form action="add_todo" onSubmit={handleTodoItems} className='form_search_bar'>
  <input type="text" onChange={handleChange} name="add_task"/>
  <input className="submit btu" type="submit" value="Add"/>
</form> 
<Form.Select aria-label="Default select example" onChange={handleChanges} className='drop_list'>
      <option >All</option>
      <option >Active</option>
      <option >Complete</option>
    </Form.Select>
    </div>

<div className="filter" >
<div className="removeAll">
    <button className="btu" onClick={handleDeleteAll}>Remove all todos</button>
</div>
<div className="makeAllComplete">
    <button className="btu" onClick={handleAllComplete}>All completes</button>
</div>
<div className="removeCompleteTasks">
    <button className="btu" onClick={removeCompleteTasks}>Remove complete task</button>
</div>
    </div>
    </div>
    </div>


<Tasks/>
    </div>)
}
export default Todo