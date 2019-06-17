import React, { Component } from 'react';
import { ModalBody, ModalFooter } from 'reactstrap'; 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';

class Login extends Component{
	constructor(props){
			super(props)
			this.state = {
				login:false,
					modalIsOpen: false,
					email: '',
					password: '',
					message: '',
					role: false,
					error: '',
			}
			this.toggelModalOpen = this.toggelModalOpen.bind(this);
			this.handelInputChange = this.handelInputChange.bind(this);
			this.toggelModalClose = this.toggelModalClose.bind(this);
			this.toggelButton = this.toggelButton.bind(this);
			this.login = this.login.bind(this);
	}

	handelInputChange(event){
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	componentWillMount(){
		this.setState({
			modalIsOpen: this.props.login,
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

	toggelButton(){
		this.setState({
			role: ! this.state.role,
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
		console.log(this.state.role)
		if(this.state.role === false){
		 fetch(`/userLogin`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: { 'Content-Type': 'application/json',	Accept: 'application/json' }
		}).then((response) =>  
		response.json())
		.then((data) => {
			if(isEmpty(data)) {
					this.setState({
						error: 'Invalid User email or password, Please Signup',
						email: '',
						password: '',
					})
		} else {
				 this.setState({
					message: 'Login Successful',
					email: '',
					password: '',
				})	
				this.props.onLoginClick(false)
			}
			console.log(this.props)
			this.props.history.push('/electronics')
	}).catch(err => {
			console.log(err)
		})	
	}else{
		fetch(`/employeeLogin`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: { 'Content-Type': 'application/json',	Accept: 'application/json' }
		}).then((response) =>  
		response.json())
		.then((data) => {
			if(isEmpty(data)) {
					this.setState({
						error: 'Invalid Employee email or password, Please Signup',
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
				<Dialog open={this.toggelModalOpen} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title" style={{textAlign: 'center'}}>Login</DialogTitle>
				<DialogContent>
					Employee
				<Radio
				onClick={this.toggelButton}
        onChange={this.handelInputChange}
        value="Employee"
        name="role"
      />
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
	 			Login
	 			</Button>
				 <Button onClick={this.toggelModalClose}>Cancel</Button>
				 </ModalFooter>
				 <label>{this.state.message}</label>
				 <label style={{color: 'red'}}>{this.state.error}</label>
				 <Grid item>
					<Button onClick={() => {this.props.onSignup()}}>
					Don't have an account? Sign Up
 					</Button>
 				</Grid>
				</DialogContent>
				</Dialog>
				: '' }
			</div>
			)
	}
}

export default Login;