import React from "react"
import styles from "./style.module.css"
import shortid from "shortid"
export default function Form({todo,settodo,todolist,settodolist}){
    const changetodo=(event)=>{
        settodo(event.target.value)
      }
    const add=(event)=>{
        event.preventDefault();
        settodolist([...todolist,{name:todo,id:shortid.generate()}]);
        settodo("")
        console.log(todolist)
      }
    return(
        <>
            <form className={styles.form} onSubmit={add}>
                <input onChange={changetodo} className={styles.forminput} type="text" placeholder="enter ToDo" value={todo}></input>
                <button className={styles.button} type="submit">ADD</button>
            </form>
        </>
    )
}