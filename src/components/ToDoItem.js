import React from "react";

// function ToDoItem(props) {
//     return (
//         <div className="todo-item">
//             <input type="checkbox" checked={props.toDo.completed} />
//             <p>{props.toDo.text}</p>
//         </div>
//     )
// }

class ToDoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <input
                    id="todo-checkbox"
                    type="checkbox"
                    checked={this.props.toDo.completed} />
                <p>{this.props.toDo.text}</p>
            </div>
        )
    }
}

export default ToDoItem;