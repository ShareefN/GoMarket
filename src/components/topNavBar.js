import React, { Component } from 'react';
import Register from "./registerForm"
import logo from '../logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { withStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';

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

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }

    classes(theme) {
        return{
        root: {
          flexGrow: 1,
        },
        paper: {
          height: 140,
          width: 100,
        },
      }
    }

    render(){
        return(
    <div style={{marginBottom: '3%'}}>
    <AppBar position="static">
    <Toolbar>
      <Typography>
      <img src={logo} style={{width:"200px",height:"100px", paddingRight:"25%"}} alt="logo" />
      </Typography>
      <Typography className={this.classes.title} style={{marginLeft: "75%", position: 'absolute'}}>
      <Button color="inherit" onClick={() => {this.props.onSubmit(1)}}>LogIn</Button>
      <Button color="inherit" onClick={() => {this.props.onSubmit(2)}}>SignUp/Register</Button>
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
    <Tab label="Household Appliences"/>
    <Tab label="Beauty & Personal Care" />
    <Tab label="Excersie / Workout"/>
  </Tabs>
</Paper>
</div>
    )
    }
}

export default NavBar;