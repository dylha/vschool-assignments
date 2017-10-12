import React from "react";
import ToDoComponent from "./ToDoComponent";
import axios from "axios";

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: []
        }
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/nonnie/todo").then(response => {
            this.setState({
                todoList: response.data
            })
        })
    }

// RENDER --------------------------------

    render() {
        return (
            <div>
                {this.state.todoList.map((todo) => {
                    return (
                        <ToDoComponent
                            title={todo.title}
                            description={todo.description}/>
                    )
                })}
            </div>
        )
    }
}

export default ToDoList;
