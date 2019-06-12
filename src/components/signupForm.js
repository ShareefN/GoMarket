import React, { Component } from 'react';
import { ModalBody, ModalFooter } from 'reactstrap'; 
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
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
				message: ''
       }
		 this.handleInputChange = this.handleInputChange.bind(this);
		 this.toggelModalOpen = this.toggelModalOpen.bind(this);
		 this.toggelModalClose = this.toggelModalClose.bind(this);
		 this.toggelSwitch = this.toggelSwitch.bind(this);
		 this.signUp = this.signUp.bind(this);
   }

	 handleInputChange(event){
    this.setState({
			[event.target.name]: event.target.value
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

signUp(){
	const user = {
		email: this.state.email,
		username: this.state.username,
		password: this.state.password,
		phoneNumber: this.state.phoneNumber
	}
	console.log(user)
	fetch('http://127.0.0.1:4546/userSignup', {
		method: 'POST',
		body: JSON.stringify(user),
		headers: { "Content-Type": "application/json" }
	}).then(response => {
		return response.json()
	}).then(body => {
		// console.log('hello')
		if (body){
			this.setState({
				message: 'Signup Completed, Please Login',
				email :'',
				passwod: '',
				username: '',
				phoneNumber: ''
			})
			console.log(this.state.message)
		}
	}).catch(err => {
		console.log(err)
	})
}

classes(theme){
	return {
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
 				onChange={this.handleInputChange}
 				label="Email"
 				name="email"
 				autoComplete="email"
				autoFocus
 			/>
			 <TextField
				required
				fullWidth
				onChange={this.handleInputChange}
				label="Username"
				name="username"
				autoFocus
			/>
				<TextField
 				required
 				fullWidth
 				onChange={this.handleInputChange}
 				type="password"
				name="password"
			  label="Password"
 				type="password"
				autoComplete="current-password"
			/> 
			<TextField
				required
				fullWidth
				onChange={this.handleInputChange}
				label="Mobile Number"
				name="phoneNumber"
				placeholder="Mobile Number"
				autoFocus
			/>
			</ModalBody>
			</form>
		</div>
		<ModalFooter>
	 			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				onClick={this.signUp}
				href = "/"
			>
				<Link style={{color: 'white', textDecoration: 'none'}}>Signup</Link>
			</Button>
				 </ModalFooter>
				</DialogContent>
				</Dialog>
			</div>
		)
	}
}

export default Signup;

