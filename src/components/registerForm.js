import React, { Component } from 'react';
// import logo from './logo.png';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Register extends Component {
   constructor(props){
       super(props)
       this.state = {
        modalIsOpen: false,
        email: '',
        password: '',
        username: '',
        phoneNumber: '',
        imgUrl: '',
        cv: '',
       }
			 this.handleInputChange = this.handleInputChange.bind(this);
			 this.toggelModal = this.toggelModal.bind(this)
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

toggelModal(){
	this.setState({
    modalIsOpen: ! this.state.modalIsOpen
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
			width: '100%', // Fix IE 11 issue.
			marginTop: theme.spacing(1),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
	}
}

render(){
	return(
		<div>
		<Modal isOpen={this.state.modalIsOpen}>
		<ModalHeader toggel={this.toggelModal}>
			{/* logo img here */}
		</ModalHeader>
		<Container component="main" maxWidth="xs">
	<CssBaseline />
	<div className={this.classes.paper}>
		<Typography component="h1" variant="h5">
			SignUp/Register
		</Typography>
		<form className={this.classes.form} noValidate>
			<TextField
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
				placeholder="Username"
				autoFocus
			/>
			<TextField
				required
				fullWidth
				onChange={this.handelInputChange}
				name="password"
				label="Password"
				type="password"
				placeholder="Password"
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
				LogIn
			</Button>
			<ModalFooter>
			<Grid container>
				<Grid item xs>
				</Grid>
				<Grid item>
					<Link href="#" variant="body2">
						{"Don't have an account? Sign Up"}
					</Link>
				</Grid>
			</Grid>
			</ModalFooter>
		</form>
	</div>
	<Box mt={5}>
	</Box>
</Container>
</Modal>
</div>
		)
}
}

export default Register;