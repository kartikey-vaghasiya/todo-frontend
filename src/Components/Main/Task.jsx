import React from "react"
import "./css/task.css"


export default function Task(props) {

    let isDone = props.isDone;
    let content = props.todoContent
    let id = props.id

    console.log(isDone,content,id)

    function handleCheckbox(){
        props.setTodoContent( (prev)=> {
            let arr = prev.map( element => element.id === id ? {...element , isDone: !isDone} : element)
            return arr.sort ( (a,b) => a.isDone - b.isDone )
        })
    }

    function deleteTask(event) {
        props.setTodoContent ( prev => {
            return prev.filter ( (prevElement) =>  props.id !== prevElement.id )
        })
    }
    
    return (
        <div className={ isDone ? "todo--task checked" : "todo--task"}>
            <div className="lable--checkbox--div">
                <input type="checkbox" checked={isDone} onChange={handleCheckbox} name="task" id="todo--checkbox" />
                <label htmlFor="todo--checkbox">{content}</label>
            </div>
            <button className="delete--btn" onClick={deleteTask}>
                <img src="./images/icons/trash.png" className="delete--img" alt="" />
            </button>
        </div>
    )
}

