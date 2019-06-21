import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
					modalIsOpen: false,
					items: [],
					totalQty: 0,
					totalPrice: 0,
				}
				this.toggelModalOpen = this.toggelModalOpen.bind(this);
				this.toggelModalClose = this.toggelModalClose.bind(this);
    }

    componentWillMount(){
      this.setState({
        modalIsOpen: this.props.cart
      })
    }

		componentDidMount(){
			fetch('/getCart').then(data => data.json())
			.then(data => {
				this.setState({
					items: data,
					totalPrice: data.price,
				})
			})
		}

		toggelModalOpen(){
			this.setState({
				modalIsOpen: ! this.state.modalIsOpen,
			})
		}

		toggelModalClose(){
			this.setState({
				modalIsOpen: ! this.state.modalIsOpen
			})
		}

		classes(theme){
			return {
				root: {
					width: '100%',
					marginTop: theme.spacing(3),
          overflowX: 'auto',
          justifyContent: 'center',
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
							{this.state.modalIsOpen ? 
								<Dialog open={this.toggelModalOpen} onClose={this.toggelModalClose} aria-labelledby="form-dialog-title">
								<DialogTitle id="form-dialog-title" style={{textAlign: 'center'}}>Cart</DialogTitle>
								<DialogContent>
								<Paper className={this.classes.root}>
                  <Table className={this.classes.tables}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                      </TableRow>
                    </TableHead>
										{this.state.items.map(item => {
											return (
											<TableBody>
                      <TableRow>
                        <TableCell>{item.name}</TableCell>
												<TableCell>1</TableCell>
                        <TableCell>{item.price}JD</TableCell>
                        {/* remove item btn */}
                      </TableRow>
											{/* <TableRow>
												<TableCell>{this.state.totalPrice}</TableCell>
											</TableRow> */}
                    </TableBody>
											)
											})}
                    <TableRow style={{textAlign: "center"}}>
                      <TableCell><Button type="submit" size="small" color="primary" onClick={this.toggelModalClose}>Continue Shopping</Button></TableCell>{" "}
                      <TableCell><Button type="submit" size="small" color="primary" href="/map">Checkout</Button></TableCell>
                    </TableRow>
                  </Table>
								</Paper>
								</DialogContent>
								</Dialog>
								: ' '}
            </div>
        )
    }
}
export default Cart;