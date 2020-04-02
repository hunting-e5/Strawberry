import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import SignIn from './components/Tabs/LoginTab/SignIn';
import SignUp from './components/Tabs/LoginTab/SignUp';
import Main from './Main';

class App extends Component {
  render(){
    return (
      <div>
      <BrowserRouter>
        <Route exact path="/"><Main></Main></Route>
        <Route exact path="/signin"><SignIn></SignIn></Route>
        <Route exact path="/signup"><SignUp></SignUp></Route>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
