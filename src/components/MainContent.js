import React from "react"
import toDosData from "../todosData"
import ToDoItem from "./ToDoItem"

// function MainContent() {

//     const toDoComponents = toDosData.map(item =>
//         <ToDoItem
//             className="todo-item"
//             key={item.id}
//             toDo={item}
//         />)

//     return (
//         <div className="todo-list">
//             {toDoComponents}
//         </div>
//     )
// }


class MainContent extends React.Component {

    getToDoComponents = () => (
        toDosData.map(item =>
            <ToDoItem
                className="todo-item"
                key={item.id}
                toDo={item}
            />)
    )

    render = () =>
        (
            <div className="todo-list" >
                {this.getToDoComponents()}
            </div>
        )
}

export default MainContent;