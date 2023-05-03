import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('check data input', this.state);
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fname">Title job:</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => this.handleChangeTitleJob(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </div>
        )
    }
}
export default AddComponent;