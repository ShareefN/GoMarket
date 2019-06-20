import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 
export class MapComponent extends Component {
	constructor(props){
		super(props)
		this.state = {
			text: '',
			modalIsOpen: false,
		}
		this.handleClickOpen = this.handleClickOpen.bind(this);
	}

	handelInputChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleClickOpen(){
		this.setState({
			modalIsOpen: ! this.state.modalIsOpen
		})
	}

  render() {
    return (
			<div>
      <h2 style={{textAlign: 'center', marginBottom: '25px'}}>Select Your Location</h2>
      <Map google={this.props.google} zoom={14} style={{height: '50%', width: '50%', marginLeft: '25%'}}>
       <Marker onClick={this.onMarkerClick}
        name={'Current location'} />
      </Map>
			<div class="container" style={{marginTop: '30%', width: '40%'}}>
			<Button variant="contained" color="primary" style={{marginLeft: '35%', marginTop: '20px'}}>Send Location</Button>
			<TextField
 				required
 				fullWidth
				 label="Comments"
				 placeholder="Optional"
 				name="text"
				autoFocus
 			/>
			 <Button variant="contained" color="primary" style={{marginLeft: '35%', marginTop: '20px'}} onClick={this.handleClickOpen}>Request Order</Button>
			</div>
			<div>
			<Dialog
        open={this.state.modalIsOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{textAlign: 'center', color: 'black'}}><strong>
            Thank you for choosing to shop with GoMarket, Your order has been sent and our team will be delivering your order shortly</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href="/" color="primary">
            Home
          </Button>
        </DialogActions>
      </Dialog>
			</div>
			</div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAKIADLElR0mdIZKTUe8UyIwjlfm4O5oC0")
})(MapComponent)
