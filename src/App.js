import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import SignIn from './components/Tabs/LoginTab/SignIn';
import SignUp from './components/Tabs/LoginTab/SignUp';
import Main from './main';
import Header from './components/Header';
import Category from './components/Category';


class App extends Component {
  render(){
    return (
      <div>
      <Header />
      <Category />
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/signin"><SignIn></SignIn></Route>
        <Route exact path="/signup"><SignUp></SignUp></Route>
        <Route exact path="/check"><Check></Check></Route>
      </BrowserRouter>
      </div>
    );
  }
}


export default App;
