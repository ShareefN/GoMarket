import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'; 
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Login extends Component{
	constructor(props){
			super(props)
			this.state = {
					modalIsOpen: false,
					email: '',
					password: ''
			}
			this.toggelModal = this.toggelModal.bind(this);
			this.handelInputChange = this.handelInputChange.bind(this);
	}

	handelInputChange(event){
		this.setState({
			email: event.target.value,
			password: event.target.value
		})
	}

	componentWillMount(){
		this.setState({
			modalIsOpen: this.props.login
		})
	}

	toggelModal() {
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
			<Modal isOpen={this.state.modalIsOpen} toggel={this.toggelModal}>
			<ModalHeader toggel={this.toggelModal}>
			</ModalHeader>
			<ModalBody>
			<Container component="main" maxWidth="xs">
		<CssBaseline />
		<div className={this.classes.paper}>
			<Typography component="h1" variant="h5">
				LogIn
			</Typography>
			<Dialog>
			<form className={this.classes.form} noValidate>
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
						<Link href="/sign" variant="body2">
							{"Don't have an account? Sign Up"}
						</Link>
					</Grid>
				</Grid>
				</ModalFooter>
			</form>
			</Dialog>
		</div>
		<Box mt={5}>
		</Box>
	</Container>
	</ModalBody>
	</Modal>
	</div>
			)
	}
}

export default Login;