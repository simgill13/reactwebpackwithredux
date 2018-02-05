import {createStore, combineReducers, applyMiddleware}  from "redux";
import logger                                           from "redux-logger";
import thunk                                            from "redux-thunk";
import promise                                          from "redux-promise-middleware";
import firstReducer                                     from "./reducers/firstReducer"
import secondReducer                                    from "./reducers/secondReducer"


export default createStore(
    combineReducers({
        
        firstReducer,
        secondReducer

    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);