import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
    // componentDidMount = () => {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 3000);
    // }
    render() {
        console.log("check prop home", this.props);
        return (
            <div>Hello world from home</div>
        )


    }

}

export default Color(Home);