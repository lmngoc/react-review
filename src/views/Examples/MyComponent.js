import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    /*dlfdgsd */
    state = {

        arrJobs: [
            { id: 'job1', title: 'Developer', salary: '$500' },
            { id: 'job2', title: 'Tester', salary: '$400' },
            { id: 'job3', title: 'Manager', salary: '$1000' }
        ]
    }



    render() {
        //let name = 'ngoc';
        console.log("call render", this.state);

        return (
            <div>
                <AddComponent />

                <ChildComponent name={this.state.firstName} age={'20'} address={'tphcm'} arrJobs={this.state.arrJobs} />
            </div>
        )
    }
}
export default MyComponent;