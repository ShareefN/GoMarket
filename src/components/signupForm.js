import React, { Component } from 'react';
import logo from '../logo.png';
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

class Signup extends Component {
   constructor(props){
       super(props)
       this.state = {
		modalIsOpen: false,
		checkedB: true,
        email: '',
        password: '',
        username: '',
        phoneNumber: '',
        imgUrl: '',
        cv: '',
       }
		 this.handleInputChange = this.handleInputChange.bind(this);
		 this.toggelModal = this.toggelModal.bind(this);
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

toggelModal(){
	this.setState({
    modalIsOpen: ! this.state.modalIsOpen
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
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
	}
}

render(){
	return(
		<div>
		<Modal isOpen={this.state.modalIsOpen}>
		<ModalHeader toggel={this.toggelModal} style={{textAlign: "center"}}>
		{/* <img src={logo} style={{width:"15%", height: "15%"}} alt="logo"/> */}
		</ModalHeader>
		<Container component="main" maxWidth="xs">
	<CssBaseline />
	<div className={this.classes.paper}>
		<Typography component="h1" variant="h5">
			User SignUp / Employee Register
		</Typography>
		<Switch
        checked={this.checkedB}
        onChange={this.toggelSwitch}
        value="checkedB"
        color="primary"
      />
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
			</Button>
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

export default Signup;