import {render}                                     from "react-dom";
import React                                        from "react";
import {Provider}                                   from "react-redux";
import {Router, Route, browserHistory, IndexRoute}  from "react-router";
import App                                          from "./containers/App";
import Second                                       from "./containers/second"
import store                                        from "./store";

render(
    <Provider store={store}>
         <Router history={browserHistory}>
                <Route path={"/"} component={App} >
                    {/* <IndexRoute component={Home} />
                    <Route path={"user/:id"} component={User} />
                    <Route path={"home"} component={Home} /> */}
                </Route>
                <Route path={"second"} component={Second}/>
            </Router>
    </Provider>,
    window.document.getElementById('app'));