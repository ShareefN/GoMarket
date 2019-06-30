import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Orders extends Component{
    constructor(props){
        super(props);
        this.state = {
					items : [],
					accept: true,
					completedModal: false,
					messages: [],
					users: [],
				}
				this.toggleButton = this.toggleButton.bind(this);
				this.handelCompleted = this.handelCompleted.bind(this);
				this.deleteOrders = this.deleteOrders.bind(this);
				this.deleteMessages = this.deleteMessages.bind(this);
		}

		componentDidMount(){
			fetch('/getOrder').then(data => data.json())
			.then(data => {
				console.log(data)
				this.setState({
					items: data
				})
			});
			fetch('/getMessages').then(messages => messages.json())
			.then(message => {
				this.setState({
					messages: message
				})
			})
			fetch('/getUser').then(data => data.json())
			.then(data => {
				this.setState({
					users: data
				})
			})
		}

		deleteOrders(){
			fetch('/removeOrders', {
				method: 'DELETE'
			}).then(data => {
				console.log(data, 'deleted')
			}).catch(err => {
				console.log(err)
			})
		}

		toggleButton(){
			this.setState({
				accept: false
			})
		}

		deleteMessages(){
			fetch('/deleteMessages', {
				method: 'DELETE'
			}).then(data => {
				console.log(data)
			}).catch(err => {
				console.log(err)
			})
		}

		handelCompleted(){
				this.setState({
					completedModal: ! this.state.completedModal
				})
		}

		render(){
			return(
				<div class="container">
					<h3>Orders</h3>
					{this.state.items.length === 0 ? <> 
					<h2 style={{marginTop: '10%', color: 'black', textAlign: 'center', textDecoration: 'underline'}}>No orders now, But please be alerted when orders are placed</h2>
				 </> :
					<div>
					{this.state.items.map(item => {
						return(
							<div class="row" className=".col-md-2">	
						<div class="card" style={{width: "50rem", height: "18rem", margin: "35px"}}>
							<div class="card-body">
								{this.state.users.map(user => {
									return(
										<div style={{textAlign: 'center'}}>
										<h6><strong>Username:</strong> {user.username}</h6>
										<h6><strong>Mobile Number:</strong> 0{user.phoneNumber}</h6>
										</div>
									)
								})}
								<h5 class="card-title">Item: <strong>{item.name}</strong>, Quantitiy: <strong>1</strong>, Price: <strong>{item.price}</strong> JD</h5>
								<h5 style={{textDecoration: 'underline', marginTop: '5%'}}>Client Requierments:</h5>
								{this.state.messages.map(mess => {
									return(
										<Fragment>
									<h6>{mess.message}</h6>
									</Fragment>
									)
								})}
								<button class="btn btn-primary" style={{color: "white"}} onClick={this.toggleButton} disabled={! this.state.accept}>Accept</button>
								<button class="btn btn-primary" style={{margin: '2%', color: "white"}} disabled={this.state.accept} onClick={this.handelCompleted}>Completed</button>
						</div>
						<div>
						<Dialog open={this.state.completedModal} TransitionComponent={Transition} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
						<DialogContent>
						<DialogTitle id="alert-dialog-slide-title"></DialogTitle>
          <DialogContentText id="alert-dialog-slide-description" style={{textAlign: 'center', color: 'black'}}>
            Thank you for delivering on time, Be ready to accept new orders
          </DialogContentText>
        </DialogContent>
        <DialogActions>
				<Button color="primary" onClick={this.deleteMessages}>
            Clear History
          </Button>
          <Button href="/orders" color="primary" onClick={this.deleteOrders}>
            Orders
          </Button>
        </DialogActions>
							</Dialog>
						</div>
					</div>
					</div>
						)
					})}
					</div>
					}
				</div>
					)
			}

}
export default Orders;