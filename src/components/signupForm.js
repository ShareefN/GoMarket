import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Signup extends Component {
   constructor(props){
       super(props)
       this.state = {
		modalIsOpen: false,
		checkedB: false,
        email: '',
        password: '',
        username: '',
        phoneNumber: '',
        imgUrl: '',
        cv: '',
       }
		 this.handleInputChange = this.handleInputChange.bind(this);
		 this.toggelModalOpen = this.toggelModalOpen.bind(this);
		 this.toggelModalClose = this.toggelModalClose.bind(this);
		 this.toggelSwitch = this.toggelSwitch.bind(this);
   }

handleInputChange(event){
    this.setState({
        email: event.target.value,
        password: event.target.value,
        username: event.target.value,
        phoneNumber: event.target.value,
        imgUrl: event.target.value,
        cv: event.target.value
    })
}

componentWillMount(){
	this.setState({
		modalIsOpen: this.props.signup
	})
}

toggelModalOpen(){
	this.setState({
    modalIsOpen: ! this.state.modalIsOpen
 })
}

toggelModalClose(){
	this.setState({
		modalIsOpen: this.state.modalIsOpen
	})
}

toggelSwitch(event){
	this.setState({
		checkedB: event.target.checked
	})
}

classes(theme){
	return {
		'@global': {
			body: {
				backgroundColor: theme.palette.common.white,
			},
		},
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		form: {
			width: '100%', 
			marginTop: theme.spacing(1),
		},
	}
}

render(){
	return(
		<div>
				<Dialog open={this.toggelModalOpen} onClose={this.toggelModalClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title" style={{textAlign: 'center'}}>User Signup / Employee Register</DialogTitle>
				<Switch
        checked={this.state.checkedB}
        onChange={this.toggelSwitch}
        value="checkedB"
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
				<DialogContent>
				<div className={this.classes.paper}>
	 		<form className={this.classes.form} noValidate>
			<ModalBody>
 			<TextField
 				required
 				fullWidth
 				onChange={this.handelInputChange}
 				label="Email"
 				name="email"
 				autoComplete="email"
				autoFocus
 			/>
			 <TextField
				required
				fullWidth
				onChange={this.handelInputChange}
				label="Username"
				name="username"
				autoFocus
			/>
				<TextField
 				required
 				fullWidth
 				onChange={this.handelInputChange}
 				type="password"
				name="password"
			  label="Password"
 				type="password"
				autoComplete="current-password"
			/> 
			<TextField
				required
				fullWidth
				onChange={this.handelInputChange}
				label="Mobile Number"
				name="phoneNumber"
				placeholder="Mobile Number"
				autoFocus
			/>
			</ModalBody>
			</form>
		</div>
		<ModalFooter>
	 			<FormControlLabel
  				control={<Checkbox value="remember" color="primary" />}
	 				label="Remember me"
	 			/>
	 			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
			>
				<Link href="/" style={{color: 'white', textDecoration: 'none'}}>Signup</Link>
			</Button>
				 </ModalFooter>
				</DialogContent>
				</Dialog>
			</div>
		)
}
}

export default Signup;

{/* <TextField
				required
				fullWidth
				onChange={this.handelInputChange}
				label="Email"
				name="email"
				placeholder="Email"
				autoComplete="email"
				autoFocus
			/>
			<TextField
				required
				fullWidth
				onChange={this.handelInputChange}
				label="Username"
				name="username"
				autoFocus
			/>
			<TextField
				required
				fullWidth
				onChange={this.handelInputChange}
				type="password"
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
			/>
			<TextField
				required
				fullWidth
				onChange={this.handelInputChange}
				label="Mobile Number"
				name="phoneNumber"
				placeholder="Mobile Number"
				autoFocus
			/>
			<FormControlLabel
				control={<Checkbox value="remember" color="primary" />}
				label="Remember me"
			/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={this.classes.submit}
			>
				Signup
			</Button> */}