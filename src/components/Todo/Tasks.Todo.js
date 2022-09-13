import { useState,useContext,useEffect } from "react";
import { SettingsContext } from "../../Context/Context";
import './Tasks.css'

import {Form,Button} from 'react-bootstrap';
function Tasks(){
    let {item,setComplete,setItem,complete,setTodoToShow,todoToShow} = useContext(SettingsContext)
const [todo,setTodo] = useState('')

function handleTrueFalse (ele){
 if(ele.complete === 'false'){
    ele.complete = 'true'

}else
ele.complete = 'false'
    setItem([...item])
}


const handleDelete = (id)=>{

const result = item.filter(ele=> ele.id !==id
)
setItem([...result])

}


// const test = ()=>{
// if(window.innerWidth < 600) {
//     console.log('The size now less than 600 px')
// }
// }
// window.addEventListener('resize',test)


if(todoToShow === 'Active'){
    item = item.filter(ele =>ele.complete ==="false")
console.log(item);
}else if(todoToShow === 'Complete'){
    item = item.filter(ele=>ele.complete === 'true')
}


return(
    <div className="Tasks">



{
 
    item.map(ele=>(
        <div className="data"  key={ele.id} >

            <div className="text_delete">
            <h2 className={ele.complete} onClick={()=>handleTrueFalse(ele)} >{ele.text}</h2>
          
            <button className="delete btu" onClick={()=> handleDelete(ele.id)}>X</button>
            </div>

        </div>

        
    ))
}



    </div>
)
}

export default Tasks