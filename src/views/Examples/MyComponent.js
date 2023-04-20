import React from "react";
class MyComponent extends React.Component {
    /*dlfdgsd */
    state = {
        name: '',
        channel: 'abc'
    }
    handleOnChangeText = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleCLickButton = () => {
        alert("click me");
    }

    render() {
        //let name = 'ngoc';

        return (
            <>
                <div className="frist">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeText(event)}></input>
                    My Component, My name is {this.state.name} </div>
                <div className="second">my youtube channel {this.state.channel}</div>
                <div className="third" ><button onClick={() => this.handleCLickButton()}>Click me</button></div>
            </>

        )
    }
}
export default MyComponent;