import React, { Component } from 'react';
import logo from './logo.png';
import NavBar from './components/topNavBar';
import Login from './components/loginForm';
// import Register from './components/registerForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles, Theme } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components';
import Slider from 'react-slick';
import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

const StyledBadge = withStyles((theme) => ({
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.-
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
}))(Badge);

const Wrapper = styled.div`
 width: 5%;
  padding: 10px;
  slider-height-percentage: 10%;
`;

// const Page = styled.div`
//   width: 10%;
//   padding: 10px;
// `;

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      status: '',
      spacing: '2',
    }
  }    

  classes(theme) {
    return{
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }
}
  render(){
    return(
      <div className={this.classes.root}>
     <NavBar />
    <h2>Special Offers</h2>
    <Wrapper>
    <AwesomeSlider style={{width: '5%', height: '5%'}}>
    <div data-src="" />
    <div data-src="" />
    </AwesomeSlider>
    </Wrapper>
    <h2>Hot Deals</h2>
    <h2>New Arrivals</h2>
    
    </div>
    )
  }
}

export default App;