import React from "react"
import Task from "./Task"
import "./css/todo.css"
import { nanoid } from 'nanoid';

export default function Todo(props) {

    const [todoContent, setTodoContent] = React.useState([]);
    const [taskInput, setTaskInput] = React.useState("");
    const [todoHeading, setTodoHeading] = React.useState({});

    let todoArray = todoContent.length > 0 ? (
        todoContent.map((element) => {
            return (
                <Task
                    todoContent={element.content}
                    isDone={element.isDone}
                    id={element.id}
                    key={element.id}
                    setTodoContent={setTodoContent}
                />
            );
        })
    ) : null;


    function handleSubmit(event) {
        event.preventDefault();

        let uniqueid = nanoid()

        if (taskInput.replaceAll(" ", "") !== "") {
            setTodoContent((prev) => {
                return (
                    [...prev, { id: uniqueid, content: taskInput, isDone: false }]
                )
            })
        }

        setTaskInput("")
    }


    function handleChange(event) {
        setTaskInput(event.target.value)
    }

    function handleChangeHeading(event) {
        setTodoHeading({ ...todoHeading, heading: event.target.value })
    }

    function addHeading(event) {
        if (todoHeading.heading.replaceAll(" ", "") !== "") {
            setTodoHeading({ ...todoHeading, istodoHeading: true })
        }
    }

    function handleEnter(event) {
        if (event.key == "Enter") {
            handleSubmit(event)
        }
    }

    function handleEnterHeading(event) {
        if (event.key == "Enter") {
            addHeading(event)
        }
        console.log(todoHeading)
    }

    function deleteTodo(event) {
        props.setTodoLists((prev) => {
            return props.todoLists.filter((prevElement) => prevElement.id !== props.id)
        })
    }

    return (
        <div className="todo--block">

            {todoHeading.istodoHeading ?
                <div className="todo--heading--div">
                    <h1>{todoHeading.heading}</h1>
                    <button className="todo--delete--btn" onClick={deleteTodo}><img src="./images/icons/trash.png" alt="" />
                    </button></div>
                :
                <div>
                    <input type="text" onKeyDown={handleEnterHeading} value={todoHeading.content} onChange={handleChangeHeading} className="todo--heading--input" />
                    <button className="yellow--btn" onClick={addHeading}>Heading</button>
                </div>

            }

            {todoArray}
            <input type="text" value={taskInput} onKeyDown={handleEnter} onChange={handleChange} className="todo--block--input" />
            <button type="submit" className="yellow--btn" onClick={handleSubmit}>Add</button>
        </div>
    )
}

