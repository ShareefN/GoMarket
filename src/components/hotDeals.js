import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

class HotDeals extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
		}
		
		classes(theme){
			return {
				root: {
          flexGrow: 1,
        },
        paper: {
          height: 140,
          width: 100,
        },
        control: {
          padding: theme.spacing(2),
        },
			}
		}

    render(){
        return(
					<Grid container className={this.classes.root}>

					</Grid>
        )
    }
}
export default HotDeals;