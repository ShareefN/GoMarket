import React, { Component } from 'react';
import logo from './logo.png'
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
  width: 100%;
  padding: 10px;
`;

const Page = styled.div`
  width: 10%;
  padding: 10px;
`;

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      status: ''
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
  }
}
  render(){
    return(
      <div className={this.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography>
          <img src={logo} style={{width:"150px",height:"120px", paddingRight:"25%"}} href = "#" alt="logo" />
          </Typography>
          <Typography className={this.classes.title} style={{marginLeft: "80%", position: 'absolute'}}>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        <IconButton aria-label="Cart" color="inherit">
        <StyledBadge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
        </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper className={this.classes.root}>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
      >      
        <Tab label="Groceries" />
        <Tab label="Elctronics" />
        <Tab label="Beauty & Personal Care" />
        <Tab label="Excersie / Workout"/>
      </Tabs>
    </Paper>
    <h2>Special Offers</h2>
    <Wrapper>
      <Slider speed={300} slidesToShow={1} slidesToScroll={1} infinite={false} draggable={true} centerMode={true}>
        <Page>one</Page>
        <Page>two</Page>
        <Page>three</Page>
      </Slider>
    </Wrapper>
    </div>
    )
  }
}

export default App;