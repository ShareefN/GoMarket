import React, { Component } from 'react';
import { ModalBody, ModalFooter } from 'reactstrap'; 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
				message: '',
				role: '',
       }
		 this.handleInputChange = this.handleInputChange.bind(this);
		 this.toggelModalOpen = this.toggelModalOpen.bind(this);
		 this.toggelModalClose = this.toggelModalClose.bind(this);
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
		modalIsOpen: ! this.state.modalIsOpen
	})
}

signUp(){
	const user = {
		email: this.state.email,
		username: this.state.username,
		password: this.state.password,
		phoneNumber: this.state.phoneNumber
	}
	// console.log(user)
	fetch('/userSignup', {
		method: 'POST',
		body: JSON.stringify(user),
		headers: { "Content-Type": "application/json" }
	}).then(response => {
		return response.json()
	}).then(body => {
		if (body){
			console.log(body)
			this.setState({
				message: 'Signup Completed, Please Login',
				email :'',
				passwod: '',
				username: '',
				phoneNumber: '',
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
			{this.state.modalIsOpen ? 
				<Dialog open={this.toggelModalOpen} onClose={this.toggelModalClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title" style={{textAlign: 'center'}}>User Signup</DialogTitle>
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
				type='tel'
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
				disabled={!this.state.phoneNumber}
			>
				<Link style={{color: 'white', textDecoration: 'none'}}>Signup</Link>
			</Button>
			<Button onClick={this.toggelModalClose}>Cancel</Button>
				 </ModalFooter>
				 <Button onClick={() => {this.props.onSubmit()}}>{this.state.message}</Button>
				</DialogContent>
				</Dialog>
				: ' '}
			</div>
		)
	}
}

export default Signup;

