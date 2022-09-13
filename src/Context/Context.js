import React from "react";
import { useState,useEffect } from "react";
export const SettingsContext = React.createContext();

export default function Setting(props) {

    let [item,setItem] = useState([])
    const [complete,setComplete] = useState('false')
    const [todoToShow,setTodoToShow] = useState('All')

//     const handleComplete = ()=>{
//         item = item.filter(ele=>ele.complete === 'true')
      
//     }
//     const handleAll = ()=>{
//         item =  item.map(ele=>ele.text)
//     }
//     const handleActive = ()=>{
//         item = item.filter(ele=>ele.complete === 'false')
//    }



useEffect(()=>{
    console.log('Mohammad')
    setItem(item)
    },[item])

    return(
        <div>
            <SettingsContext.Provider value={{todoToShow,setTodoToShow,item,setItem,complete,setComplete}}>
                {props.children}
            </SettingsContext.Provider>
        </div>
    )
}