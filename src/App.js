import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/loginForm';
import Signup from './components/signupForm';
import NavBar from './components/topNavBar';
import Register from './components/register';
import HotDeals from './components/hotDeals'

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
      signup: this.state.signup
    })
  }

  toggelForms = () => {
      this.setState({
        login: this.state.login,
        signup: ! this.state.signup,
        register: this.state.register
      })  
    }
  
  render(){
    return(
      <div>
        <Router>
          {/* <Route exact path="registerForm" render={(props) => <Register />}/> */}
          {/* <Route exact path="hotDeals" render={(props) => <HotDeals />}/> */}
        </Router>
     <NavBar onSubmit={this.onSubmit} toggelForms={this.toggelForms}/>
     {this.state.login ? <Login login={this.state.login} /> : null}
     {this.state.signup ? <Signup signup={this.state.signup} /> : null}
     {this.state.register ? <Register register={this.state.register} /> : null}
    </div>
    )
  }
}

export default App;