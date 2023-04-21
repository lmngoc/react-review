import React from "react";
class ChildComponent extends React.Component {
    /*dlfdgsd */
    state = {
        firstName: '',
        lastName: ''
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
        let { name, age, arrJobs } = this.props;
        return (
            <div>
                Child Component : {name} - {age}
                <div className="list-job">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>{item.title} - {item.salary}</div>
                            )

                        })
                    }
                </div>
            </div>
        )
    }
}
export default ChildComponent;