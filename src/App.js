import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Redirect } from 'react-router'
import Login from './components/loginForm';
import Signup from './components/signupForm';
import NavBar from './components/topNavBar';
import Register from './components/register';
import Cart from './components/cart';
import HotDeals from './components/hotDeals';
import NewArrivals from './components/newArrivals';
// import Slider from './components/slider';
import Groceries from './components/groceries';
import Electronics from './components/electronics';
import Exercise from './components/exercise';
import HouseAppliences from './components/HouseAppliences';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      login: false,
      signup: false,
      register: false,
      cart: false,
      isLogedin: false
    }
  }    

  onSubmit = () => {
    console.log("HIIII")
    this.setState({
      login: ! this.state.login,
    })
  }

  onSignup = () => {
    this.setState({
      signup: ! this.state.signup
    })
  }

  onRegister = () => {
    this.setState({
      register: ! this.state.register
    })
  }

    toggelCart = () => {
      this.setState({
        cart: ! this.state.cart,
      })
    }
  
  onLoginClick = () => { 
    this.setState({
      login: false
    })
  }

  render(){
    return(
      <div>
     <NavBar onSubmit={this.onSubmit} onSignup={this.onSignup} onRegister={this.onRegister} toggelCart={this.toggelCart}/>
     {this.state.login ? <Login onSignup={this.onSignup} login={this.state.login} onLoginClick={this.onLoginClick}/> : null}
     {this.state.signup ? <Signup onSubmit={this.onSubmit} signup={this.state.signup} /> : null}
     {this.state.register ? <Register onSubmit={this.onSubmit} register={this.state.register} /> : null}
     {this.state.cart ? <Cart cart={this.state.cart} /> : null}
        <Router>
          {/* <Route exact path="/"  component={Slider}/> */}
          <Route exact path="/" render={(props) => <NewArrivals />}/>
          <Route exact path="/" render={(props) => <HotDeals />}/>
          <Route exact path="/groceries" render={(props) => <Groceries />} />
          <Route exact path="/electronics"  component={Electronics}/>
          <Route exact path="/exercise" render={(props) => <Exercise />}/>
          <Route exact path="/house" component={HouseAppliences}/>
          <Route exact path="/login" component={Login}/>
        </Router>
    </div>
    )
  }
}

export default App;