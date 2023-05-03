import React from "react";
class ChildComponent extends React.Component {
    /*dlfdgsd */
    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    render() {
        //let name = 'ngoc';
        console.log("call render", this.state);
        let { name, age, arrJobs } = this.props;
        let { showJob } = this.state;
        return (
            <div>
                Child Component : {name} - {age}
                {showJob === false ?
                    <div><button onClick={() => this.handleShowHide()}>show</button></div>
                    :
                    <>
                        <div className="list-job">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>{item.title} - {item.salary}</div>
                                    )

                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}> hide</button></div>
                    </>
                }
            </div>
        )
    }
}
export default ChildComponent;