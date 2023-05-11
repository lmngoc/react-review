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

    addNewJob = (job) => {
        //console.log('check job from parent:', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJob
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component did update: Prev state: ", prevState, "current state:", this.state);
    }

    componentDidMount() {
        //call API
        console.log("component did mount");
    }

    render() {
        //let name = 'ngoc';
        console.log("call render", this.state);

        return (
            <div>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent name={this.state.firstName} age={'20'} address={'tphcm'} arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob} />
            </div>
        )
    }
}
export default MyComponent;