import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import SignIn from './components/Tabs/LoginTab/SignIn';
import SignUp from './components/Tabs/LoginTab/SignUp';
import Main from './main';
import MainHeader from "./components/MainHeader";
import CreatePost from './components/Tabs/CreateTab/CreatePost';
import CreateButton from './components/CreateButton';

class App extends Component {
  render() {
    return (
      <div id='container'>
        <BrowserRouter>
          <Route exact path="/">
            <MainHeader />
            <Main />
            <CreateButton />
        </Route>
          <Route exact path="/signin"><SignIn /></Route>
          <Route exact path="/signup"><SignUp /></Route>
          <Route exact path="/create"><CreatePost /></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
