import React from "react";

function ToDoItem(props) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }


    return (
        <div className="todo-item">
            <input type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

// class ToDoItem extends React.Component {
//     render() {
//         return (
//             <div className="todo-item">
//                 <input
//                     id="todo-checkbox"
//                     type="checkbox"
//                     onChange={() => this.props.handleChange(this.props.item.id)}
//                     checked={this.props.item.completed} />
//                 <p>{this.props.item.text}</p>
//             </div>
//         )
//     }
// }

export default ToDoItem;