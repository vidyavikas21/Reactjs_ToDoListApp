import React from "react"
import Todo from "./todo"
export default function Todolist({todolist,settodolist}){
    return(
        <>
            {todolist.map((item)=>(
                <Todo key={item.id} item={item} todolist={todolist} settodolist={settodolist}></Todo>
            ))}
        </>
    )
}