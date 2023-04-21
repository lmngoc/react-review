import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    /*dlfdgsd */
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'job1', title: 'Developer', salary: '$500' },
            { id: 'job2', title: 'Tester', salary: '$400' },
            { id: 'job3', title: 'Manager', salary: '$1000' }
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('check data input', this.state);
    }
    render() {
        //let name = 'ngoc';
        console.log("call render", this.state);

        return (
            <div>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent name={this.state.firstName} age={'20'} address={'tphcm'} arrJobs={this.state.arrJobs} />
            </div>
        )
    }
}
export default MyComponent;