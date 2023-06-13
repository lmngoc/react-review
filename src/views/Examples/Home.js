import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/chandung-ngoc-small.jpg";

class Home extends React.Component {
    // componentDidMount = () => {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 3000);
    // }
    render() {
        console.log("check prop home", this.props);
        return (
            <>
                <div>Hello world from home</div>
                <img src={logo} style={{ width: '200 px', height: '200px', marginTop: '20px' }} />
            </>

        )


    }

}

export default Color(Home);