import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/loginForm';
import Signup from './components/signupForm';
import NavBar from './components/topNavBar';
import Register from './components/register';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      login: false,
      signup: false,
      register: false
    }
  }    

  onSubmit = () => {
    this.setState({
      login: ! this.state.login,
      signup: false
    })
  }
  onSubmitSignup = () => {
    this.setState({
      signup: ! this.state.signup,
      login: false
    })
  }

  toggelForms = () => {
    this.setState({
      signup: this.state.signup,
      register: ! this.state.register
    })
  }

  render(){
    return(
      <div>
        <Router>
          {/* <Route exact path="registerForm" render={(props) => <Register />}/> */}
        </Router>
     <NavBar onSubmit={this.onSubmit} onSubmitSignup={this.onSubmitSignup}/>
     {this.state.login ? <Login login={this.state.login} /> : null}
     {this.state.signup ? <Signup signup={this.state.signup} /> : null}
     {this.state.register ? <Register register={this.state.register}/> : null}
    </div>
    )
  }
}

export default App;