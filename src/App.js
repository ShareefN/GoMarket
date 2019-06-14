import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/loginForm';
import Signup from './components/signupForm';
import NavBar from './components/topNavBar';
import Register from './components/register';
import Cart from './components/cart';
import HotDeals from './components/hotDeals';
import NewArrivals from './components/newArrivals';
import Slider from './components/slider';
import Groceries from './components/groceries';
import Electronics from './components/electronics';
import HouseHold from './components/household';
import Beauty from './components/beauty';
import Exercise from './components/exercise';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      login: false,
      signup: false,
      register: false,
      cart: false
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
        register: this.state.register,
      })  
    }

    toggelCart = () => {
      this.setState({
        cart: !this.state.cart,
      })
    }
  
  render(){
    return(
      <div>
     <NavBar onSubmit={this.onSubmit} toggelForms={this.toggelForms} toggelCart={this.toggelCart}/>
     {this.state.login ? <Login login={this.state.login} /> : null}
     {this.state.signup ? <Signup signup={this.state.signup} /> : null}
     {this.state.register ? <Register register={this.state.register} /> : null}
     {this.state.cart ? <Cart cart={this.state.cart} /> : null}
        <Router>
          <Route exact path="/registerForm" render={(props) => <Register />}/>
          <Route exact path="/signup" render={(props) => <Signup />}/>
          <Route exact path="/" render={(props) => <Slider />}/>
          {/* <Route exact path="/" render={(props) => <NewArrivals />}/> */}
          {/* <Route exact path="/" render={(props) => <HotDeals />}/> */}
          <Route exact path="/groceries" render={(props) => <Groceries />} />
          <Route exact path="/electronics" render={(props) => <Electronics />}/>
          <Route exact path="/household" render={(props) => <HouseHold />}/>
          <Route exact path="/beauty" render={(props) => <Beauty />}/>
          <Route exact path="/exercise" render={(props) => <Exercise />}/>
        </Router>
    </div>
    )
  }
}

export default App;