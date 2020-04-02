import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import SignIn from './components/Tabs/LoginTab/SignIn';
import SignUp from './components/Tabs/LoginTab/SignUp';
import Main from './main';

class App extends Component {
  render(){
    return (
      <div>
      <BrowserRouter>
<<<<<<< HEAD
        <Route exact path="/" component={Main} />
        <Route exact path="/signin"><SignIn></SignIn></Route>
        <Route exact path="/signup"><SignUp></SignUp></Route>
        <Route exact path="/check"><Check></Check></Route>
=======
        <Route exact path="/"><Main /></Route>
        <Route exact path="/signin"><SignIn /></Route>
        <Route exact path="/signup"><SignUp /></Route>
>>>>>>> 300ea68afbe71af00c75d7df2a0ef7964a425f16
      </BrowserRouter>
      </div>
    );
  }
}
<<<<<<< HEAD


=======
>>>>>>> 300ea68afbe71af00c75d7df2a0ef7964a425f16
export default App;
