import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter, Router, Route } from "react-router-dom";
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';

const StyledBadge = withStyles((theme) => ({
    badge: {
      top: '50%',
      right: -3,
      border: `2px solid ${
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
    },
  }))(Badge);

class NavBar extends Component{

    classes(theme) {
        return{
        root: {
          flexGrow: 1,
        },
      }
    } 

    render(){
        return(
    <div style={{marginBottom: '3%'}}>
    <AppBar position="static">
    <Toolbar>
      <Typography style={{color: "white", textDecoration:"none", display: 'inline-block', paddingTop: '.3125rem', paddingBottom: '.3125rem', marginRight: '1rem', fontSize: '1.25rem', lineHeight: 'inherit', whiteSpace: 'nowrap'}}>
        <Link href="#" style={{color: 'white', textDecoration: 'none'}}>GoMarket</Link>
      </Typography>
      <Typography className={this.classes.title} style={{marginLeft: "75%", position: 'absolute'}}>
      <Button color="inherit" onClick={() => {this.props.onSubmit()}}>LogIn</Button>
      <Button color="inherit" onClick={() => {this.props.onSignup()}}>SignUp</Button>
      <Button color="inherit" onClick={() => {this.props.onRegister()}}>Register</Button>
    <IconButton aria-label="Cart" color="inherit" onClick={() => {this.props.toggelCart()}}>
    <StyledBadge badgeContent={4} color="primary">
    <ShoppingCartIcon />
  </StyledBadge>
    </IconButton>
      </Typography>
    </Toolbar>
  </AppBar>
  <Paper className={this.classes.root}>
    <BrowserRouter>
  <Tabs
    indicatorColor="primary"
    textColor="primary"
    centered >
     <Link href ="/" style={{textDecoration: 'none'}}><Tab label="Home" /></Link>
     <Link href ="/groceries" style={{textDecoration: 'none'}}><Tab label="Groceries" /></Link>
     <Link href ="/electronics" style={{textDecoration: 'none'}}><Tab label="Elctronics" /></Link>
     <Link href ="/exercise" style={{textDecoration: 'none'}}><Tab label="Exercise / Workout"/></Link>
  </Tabs>
  </BrowserRouter>
</Paper>
</div>
    )
    }
}

export default NavBar;