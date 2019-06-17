import React, { Component } from 'react';
import { ModalBody, ModalFooter } from 'reactstrap'; 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Login extends Component{
	constructor(props){
			super(props)
			this.state = {
					modalIsOpen: false,
					email: '',
					password: '',
					message: '',
					role: '',
			}
			this.toggelModalOpen = this.toggelModalOpen.bind(this);
			this.handelInputChange = this.handelInputChange.bind(this);
			this.toggelModalClose = this.toggelModalClose.bind(this);
			this.login = this.login.bind(this);
	}

	handelInputChange(event){
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	componentWillMount(){
		this.setState({
			modalIsOpen: this.props.login
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

	login(){
		function isEmpty(obj) {
			for(var key in obj) {
					if(obj.hasOwnProperty(key))
							return false;
			}
			return true;
	}
		const user = {
			email: this.state.email,
			password: this.state.password
		}
		console.log(user)
		 fetch(`/userLogin`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		}).then((response) =>  
		response.json())
		.then((data) => {
			if(isEmpty(data)) {
					this.setState({
						message: 'Invalid username or password, Please Signup',
						email: '',
						password: '',
					})
		} else {
				 this.setState({
					message: 'Login Successful',
					email: '',
					password: '',
				})	
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
				<DialogTitle id="form-dialog-title" style={{textAlign: 'center'}}>Login</DialogTitle>
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
 				type="password"
				name="password"
			  label="Password"
 				type="password"
				autoComplete="current-password"
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
					   onClick={this.login}
					 >			 
	 			<Link style={{color: 'white', textDecoration: 'none'}}>LogIn</Link>
	 			</Button>
				 <Button onClose={this.toggelModalClose} href="/">Cancel</Button>
				 </ModalFooter>
				 <label>{this.state.message}</label>
				 <Grid item>
					<Link href="/signup" variant="body4">
					{"Don't have an account? Sign Up"}
 					</Link>
 				</Grid>
				</DialogContent>
				</Dialog>
			</div>
			)
	}
}

export default Login;