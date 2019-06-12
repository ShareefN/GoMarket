import React, { Component } from 'react';
import { ModalBody, ModalFooter } from 'reactstrap'; 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
					modalIsOpen: false,
				}
				this.toggelModalOpen = this.toggelModalOpen.bind(this);
				this.toggelModalClose = thie.toggelModalClose.bind(this);
    }

		toggelModalOpen(){
			this.setState({
				modalIsOpen: ! this.state.modalIsOpen,
			})
		}

		toggelModalClose(){
			this.setState({
				modalIsOpen: this.state.modalIsOpen
			})
		}

		classes(theme){
			return {
				root: {
					width: '100%',
					marginTop: theme.spacing(3),
					overflowX: 'auto',
				},
				table: {
					minWidth: 650,
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
			}
		}

    render(){
        return(
            <div>
								<Dialog isopen={this.toggelModalOpen} onClose={this.toggelModalClose} aria-labelledby="form-dialog-title">
								<DialogTitle id="form-dialog-title" style={{textAlign: 'center'}}>Cart</DialogTitle>
								<DialogContent>
								<Paper className={this.classes.root}>
                  <Table className={this.classes.tables}>
                    <TableHead>
                      <TableRow>
                        <TabelCell>Item</TabelCell>
                        <TabelCell>Quantity</TabelCell>
                        <TableCell>Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{ item }</TableCell>
                        <TableCell>{ quantity }</TableCell>
                        <TabelCell>{ price }</TabelCell>
                        {/* remove item btn */}
                      </TableRow>
                    </TableBody>
                    <TableFooter>
                      {/* Checkout btn the will reroute to the map page */}
                    </TableFooter>
                  </Table>
								</Paper>
								</DialogContent>
								</Dialog>
            </div>
        )
    }
}
export default Cart;