import React                from "react";
import {connect}            from "react-redux";
import {Link}               from "react-router";
// import { User }             from "../components/User";
// import { Main }             from "../components/Main";
// import { setName }          from "../actions/userActions";
import styles               from "../../../src/app.css"






class App extends React.Component {
   
    render() {
        
        return (
            <div>
                <h2> app component </h2>
                <button><Link to={"second"} activeClassName={"active"}> go to second component</Link></button>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
