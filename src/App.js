import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/loginForm';
import Register from './components/registerForm'
// import logo from './logo.png';
import NavBar from './components/topNavBar';
// import Register from './components/registerForm';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

const Wrapper = styled.div`
 width: 5%;
  padding: 10px;
  slider-height-percentage: 10%;
`;

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      login: false,
      register: false
    }
  }    

  onSubmit = (btnNum) => {
    this.setState({
      login: ! this.state.login,
      register: ! this.state.register,
    })
  }

  classes(theme) {
    return{
    root: {
      flexGrow: 1,
    },
  }
}
  render(){
    return(
      <div>
        <Router>
          {/* <Route exact/> 
          <Route exact path="/loginForm" render={(props) => <Login />} />
          <Route exact path="registerForm" render={(props) => <Register />}/> */}
        </Router>
     <NavBar onSubmit={this.onSubmit}/>
     {this.state.login ? <Login login={this.state.login} /> : <div></div>}
     {this.state.register ? <Register register={this.state.register}/> : <div></div>}
    {/* create components for each tag
    <h2>Special Offers</h2>
    <Wrapper>
    <AwesomeSlider style={{width: '5%', height: '5%'}}>
    <div data-src="" />
    <div data-src="" />
    </AwesomeSlider>
    </Wrapper>
    <h2>Hot Deals</h2>
    <h2>New Arrivals</h2> */}
    </div>
    )
  }
}

export default App;