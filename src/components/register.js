import React, { Component } from 'react';
import { storage } from '../firebase/index'
import { ModalBody, ModalFooter } from 'reactstrap'; 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
						image: '',
            imgUrl: '',
            cv: '',
            message: ''
				}
				this.handelInputChange = this.handelInputChange.bind(this);
				this.toggalModalOpen = this.toggalModalOpen.bind(this);
				this.toggelModalClose = this.toggelModalClose.bind(this);
				this.toggelSwitch = this.toggelSwitch.bind(this);
				this.userRegister = this.userRegister.bind(this);
				this.selectedFile = this.selectedFile.bind(this);
				this.imageUpload = this.imageUpload.bind(this);
    }    

    handelInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
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
				modalIsOpen: ! this.state.modalIsOpen
			})
		}
		
		toggelSwitch(){
			this.setState({
				checkedB: this.props.checkedB,
			})
		}

		userRegister(){
		const user = {
			email: this.state.email,
			username: this.state.username,
			password: this.state.password,
			phoneNumber: this.state.phoneNumber
		}
		console.log(user)
		fetch('/employeeSignup', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: { "Content-Type": "application/json" }
		}).then(response => {
			return response.json()
		}).then(body => {
			if (body){
				this.setState({
					message: 'Application Completed, Please Login And Start Taking Orders',
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

		selectedFile(event){
			const image = event.target.files[0];
			this.setState({
				image
			})
		}
		
		imageUpload(){
			const { image } = this.state;
			const uploadImg = storage.ref(`images/${image.name}`).put(image);

			uploadImg.on("state_chaned", snapshot => {},
			error => {
				console.log(error);
			},
			() => {
				storage
				.ref("images")
				.child(image.name)
				.getDownloadURL()
				.then(imgUrl => {
					this.setState({
						imgUrl
					})
				});
			}
			)
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
					{this.state.modalIsOpen ? 
				<Dialog open={this.toggalModalOpen} onClose={this.toggelModalClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title" style={{textAlign: 'center'}}>Employee Register Form</DialogTitle>
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
	 			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				onClick={this.userRegister}
				disabled={!this.state.phoneNumber}
			>
				<Link style={{color: 'white', textDecoration: 'none'}}>Apply</Link>
			</Button>
			<Button onClick={this.toggelModalClose}>Cancel</Button>
				 </ModalFooter>
				 <Button onClick={() => {this.props.onSubmit()}}>{this.state.message}</Button>
				</DialogContent>
				</Dialog>
				: ' ' }
			</div>
    
        )
    }
}
export default Register;