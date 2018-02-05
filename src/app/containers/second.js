import React                from "react";
import {connect}            from "react-redux";
import {Link}               from "react-router";
import { User }             from "../components/User";
import { Main }             from "../components/Main";
import { setName }          from "../actions/userActions";
import styles               from "../../../src/app.css"






class Second extends React.Component {
   
    render() {
        console.log(this.props.firstReducer.test)
        console.log(this.props.secondReducer.test)
        return (
            <div>
                <h2> second component </h2>
                <button><Link to={"/"} activeClassName={"active"}> go back to home</Link></button>
                
            </div> 
        );
    }
}








const mapStateToProps = (state) => {
  return {
        firstReducer:state.firstReducer,
        secondReducer:state.secondReducer
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Second);
