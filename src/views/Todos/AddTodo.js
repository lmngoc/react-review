import React from "react"

class AddTodo extends React.Component {
    state = {
        title: ""
    }
    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            alert("missing value");
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ""
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-toto">
                <input type="text" value={title} onChange={(event) => this.handleOnChange(event)} />
                <button type="button" onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;