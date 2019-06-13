import React, { Component } from 'react';
import { storage } from '../firebase/index'
import { ModalBody, ModalFooter } from 'reactstrap'; 
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
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
				modalIsOpen: this.state.modalIsOpen
			})
		}
		
		toggelSwitch(event){
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
		fetch('http://127.0.0.1:4546/employeeSignup', {
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
		

		imageUpload(event){
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
				<Dialog open={this.toggalModalOpen} onClose={this.toggelModalClose} aria-labelledby="form-dialog-title">
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
				onClick={this.imageUpload}
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
	 			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				onClick={this.userRegister}
			>
				<Link style={{color: 'white', textDecoration: 'none'}}>Apply</Link>
			</Button>
			<Button><Link href = "/">Cancel</Link></Button>
				 </ModalFooter>
				</DialogContent>
				</Dialog>
			</div>
    
        )
    }
}
export default Register;