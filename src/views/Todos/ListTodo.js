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
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Add success")
    }
    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentTodo
        })
    }
    handleEditTodo = (todo) => {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo];
            let objIndex = listTodoCopy.findIndex(item => item.id === todo.id);
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success("Edit success")
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log("check is empty obj", isEmptyObj)
        return (
            <div className="list-toto-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-toto-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === false && editTodo.id === item.id ?
                                        <span>{index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnChangeEditTodo(event)} /></span>

                                        :
                                        <span>{index + 1} - {item.title}</span>
                                    }
                                    <button onClick={() => this.handleEditTodo(item)}> {isEmptyObj === false && editTodo.id === item.id ? "save" : "edit"}</button>
                                    <button className="bt-delete" onClick={() => this.handleDeleteTodo(item)}>delete</button>
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