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

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
						modalIsOpen: false,
						CheckedB: false,
            email: '',
            username: '',
            password: '',
            phoneNumber: '',
            imgUrl: '',
            cv: '',
            message: ''
				}
				this.handelInputChange = this.handelInputChange.bind(this);
				this.toggalModalOpen = this.toggalModalOpen.bind(this);
				this.toggelModalClose = this.toggelModalClose.bind(this);
				this.toggelSwitch = this.toggelSwitch.bind(this);
    }    

    handelInputChange(event){
        this.setState({
            email: event.target.value,
            username: event.target.value,
            password: event.target.value,
            phoneNumber: event.target.value,
            imgUrl: event.target.value,
            CV: event.target.value,
        })
    }

		componentWillMount(){
			this.setState({
				modalIsOpen: this.props.register
			})
		}

    toggalModalOpen(){
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
				checkedB: event.target.checked,
			})
		}

		classes(theme){
			return {
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
			Image
			<TextField
				required
				fullWidth
				onChange={this.handelInputChange}
				type="file"
				label="Image"
				name="imgUrl"
				autoFocus
			/>
			CV
			<TextField
				required
				fullWidth
				onChange={this.handelInputChange}
				type="file"
				label="CV"
				name="cv"
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
				<Link href="/" style={{color: 'white', textDecoration: 'none'}}>Apply</Link>
			</Button>
				 </ModalFooter>
				</DialogContent>
				</Dialog>
			</div>
    
        )
    }
}
export default Register;