import React from "react"
import toDosData from "../todosData"
import ToDoItem from "./ToDoItem"
import randomcolor from "randomcolor"

class MainContent extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: toDosData,
            count: 0,
            color: "",
            isFriendly: true,
            gender: "",
            favColor: "",
            firstName: "",
            lastName: "",
            age: "",
            destination: "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleChange(event) {
        // this.setState(prevState => {
        //     const updatedTodos = prevState.todos.map(todo => {
        //         if (todo.id === id) {
        //             return {
        //                 ...todo,
        //                 completed: !todo.completed
        //             }
        //         }
        //         return todo;
        //     })
        //     return { todos: updatedTodos }
        // })

        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState(prevState => {
            return {
                dietaryRestrictions: {
                    ...prevState.dietaryRestrictions,
                    [name]: checked
                }
            }
        }
        ) : this.setState({ [name]: value })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const newColor = randomcolor();
            this.setState({ color: newColor })
        }
    }

    render() {

        const toDoItems = this.state.todos.map(item =>
            <ToDoItem
                className="todo-item"
                handleChange={this.handleChange}
                key={item.id}
                item={item}
            />)

        return (

            <div>

                <form>
                    <input value={this.state.firstName} name="firstName" onChange={this.handleChange} placeholder="First Name" /><br />
                    <input value={this.state.lastName} name="lastName" onChange={this.handleChange} placeholder="Last Name" /><br />
                    <input value={this.state.age} name="age" onChange={this.handleChange} placeholder="Age" /><br />

                    {/* Create radio buttons for gender here */}
                    <label><input checked={this.state.gender === "male"} value="male" type="radio" name="gender" onChange={this.handleChange} />Male</label>
                    <label><input checked={this.state.gender === "female"} value="female" type="radio" name="gender" onChange={this.handleChange} />Female</label>

                    <br />

                    <select
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose a destination --</option>
                        <option value="iceland">Iceland</option>
                        <option value="montreal">Montreal</option>
                        <option value="spain">Spain</option>
                        <option value="cork">Cork</option>
                    </select>

                    <br />

                    {/* Create check boxes for dietary restrictions here */}

                    <label><input checked={this.state.dietaryRestrictions.isVegan} type="checkbox" name="isVegan" onChange={this.handleChange} />Vegan</label>
                    <label><input checked={this.state.dietaryRestrictions.isKosher} type="checkbox" name="isKosher" onChange={this.handleChange} />Kosher</label>
                    <label><input checked={this.state.dietaryRestrictions.isLactoseFree} type="checkbox" name="isLactoseFree" onChange={this.handleChange} />Lactose Free</label>

                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions:
                    <p>Vegan: {this.state.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
                    <p>Kosher: {this.state.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
                    <p>Lactose Free: {this.state.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>
                </p> 


                <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
                <button onClick={this.increment}>Increment!</button>
                <button onClick={this.decrement}>Decrement!</button>
                <div className="todo-list" >
                    {toDoItems}
                </div>
            </div>
        )
    }
}

export default MainContent;