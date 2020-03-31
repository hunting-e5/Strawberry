import React, { Component } from 'react';
import Header from "./components/Header";
import Category from "./components/Category";
import { Route, } from "react-router-dom";
import SignIn from './components/Tabs/LoginTab/SignIn';
import SignUp from './components/Tabs/LoginTab/SignUp';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path = "/">    
                    <Header />
                    <Category />
                </Route>
                <Route exact path = '/signin'><SignIn></SignIn></Route>
                <Route exact path = '/signup'><SignUp></SignUp></Route>
            </div>
        );
    }
}

export default Main;