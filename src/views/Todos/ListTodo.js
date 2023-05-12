import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bug' }
        ]
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Add success")
    }
    render() {
        let { listTodo } = this.state;
        return (
            <div className="list-toto-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-toto-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child">
                                    <span>{index + 1} {item.title}</span>
                                    <button>edit</button>
                                    <button>delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default ListTodo;