import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import SignIn from './components/Tabs/LoginTab/SignIn';
import SignUp from './components/Tabs/LoginTab/SignUp';
import Main from './main';
import Header from "./components/MainHeader";
import Check from "./components/itemlist/check";
class App extends Component {
  render(){
    return (
      <div>
      <BrowserRouter>
        <Route exact path="/">
          <Header/>
          <Main />
          </Route>
        <Route exact path="/signin"><SignIn /></Route>
        <Route exact path="/check"><Check /></Route>
        <Route exact path="/signup"><SignUp /></Route>
      </BrowserRouter>
      </div>
    );
  }
}


export default App;
