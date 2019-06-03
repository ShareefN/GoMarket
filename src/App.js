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
          <img src={logo} style={{width:"150px",height:"120px", paddingRight:"25%"}} alt="logo" />
          </Typography>
          <Typography className={this.classes.title} style={{marginLeft: "80%", position: 'absolute'}}>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        <IconButton aria-label="Cart" color="inherit">
          <ShoppingCartIcon />
        <h6>2 JD</h6>
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
        <Tab label="Beauty and Personal Care" />
        <Tab label="Excersie / Workout"/>
      </Tabs>
    </Paper>
    </div>
    )
  }
}

export default App;