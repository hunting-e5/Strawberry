import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import SignIn from './components/Tabs/LoginTab/SignIn';
import SignUp from './components/Tabs/LoginTab/SignUp';
<<<<<<< HEAD
import Main from './main';
import Header from "./components/MainHeader";
import CreatePost from './components/CreatePost';
import CreateButton from './components/CreatePost';
=======
import MainTab from "./components/Tabs/MainTab/MainTab";
import CreatePost from './components/Tabs/CreateTab/CreatePost';
import CreateButton from './components/CreateButton';
import Header from './components/Header/Header';
import ShowItemTab from './components/Tabs/ShowItemTab/ShowItemTab';

>>>>>>> 72b79932f4b1fd0ee785309a98c360b3c836129a
class App extends Component {
  render() {
    return (
      <div id='container'>
        <BrowserRouter>
          <Header/>
          <Route exact path="/">
            <MainTab />
            <CreateButton />
          </Route>
          <Route exact path='/item' component={ShowItemTab} />
          <Route exact path="/signin"><SignIn /></Route>
          <Route exact path="/signup"><SignUp /></Route>
          <Route exact path="/create"><CreatePost /></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
