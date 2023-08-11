import React from "react"
import Todo from "./Todo"
import "./css/list.css"
import { nanoid } from 'nanoid';


export default function List() {

    const [todoLists, setTodoLists] = React.useState([])
    
    function addNewToDo() {
        let id = nanoid()
        setTodoLists((prev) => {
            return [
                ...prev,

                <Todo id= {id}
                      key={id}
                      setTodoLists={ setTodoLists }
                      todoLists = { todoLists }
                />
            ];
        });
    }


    let ListsArray = todoLists.map( element => element)
    return (
        <div className="main">
            <button className="create--btn" onClick={addNewToDo}>Create new TO-DO</button>
            <div className="list--div">
                {ListsArray}
            </div>
        </div>
    )
}

