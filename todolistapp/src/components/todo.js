import React from "react"
import styles from "./style.module.css"

export default function Todo({item,todolist,settodolist}){
    const done=()=>{
        settodolist(todolist.filter((item1)=>item1.id!==item.id))
    }

    return(
        <React.Fragment>
            <p className={styles.para}>{item.name}</p>
            <button onClick={done} className={styles.button2}>Done</button><br />
        </React.Fragment>
    )

}