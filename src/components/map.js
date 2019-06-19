import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
 
export class MapComponent extends Component {
	constructor(props){
		super(props)
		this.state = {
			text: '',
		}
	}

	handelInputChange(event){
		this.setState({
			[event.target.name]: event.target.value
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
			<div class="container" style={{marginTop: '35%', width: '40%'}}>
			<TextField
 				required
 				fullWidth
				 label="Comments"
				 placeholder="Optional"
 				name="text"
				autoFocus
 			/>
			 <Button 	variant="contained" color="primary" style={{marginLeft: '35%', marginTop: '20px'}}>Request Order</Button>
			</div>
			</div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAKIADLElR0mdIZKTUe8UyIwjlfm4O5oC0")
})(MapComponent)
