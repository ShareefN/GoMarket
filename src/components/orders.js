import React, { Component } from 'react';
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
				}
				this.toggleButton = this.toggleButton.bind(this);
				this.handelCompleted = this.handelCompleted.bind(this);
		}

		componentDidMount(){
			fetch('/getOrder').then(data => data.json())
			.then(data => {
				console.log(data)
				this.setState({
					items: data
				})
			})
		}

		toggleButton(){
			this.setState({
				accept: false
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
					<div>
					{this.state.items.map(item => {
						return(
					 <div class="row" className=".col-md-2">	
						<div class="card" style={{width: "50rem", height: "10rem", margin: "35px"}}>
							<div class="card-body">
								<h5 class="card-title">Item: {item.name}, Quantitiy: 1, Price: {item.price}</h5>
								<button class="btn btn-primary" style={{color: "white"}} onClick={this.toggleButton} disabled={! this.state.accept}>Accept</button>
								<button class="btn btn-primary" style={{margin: '5%', color: "white"}} disabled={this.state.accept} onClick={this.handelCompleted}>Completed</button>
						</div>
						<div>
						<Dialog open={this.state.completedModal} TransitionComponent={Transition} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
						<DialogContent>
						<DialogTitle id="alert-dialog-slide-title"></DialogTitle>
          <DialogContentText id="alert-dialog-slide-description" style={{textAlign: 'center', color: 'black'}}>
            Thank you delivering on time, Be ready to accept new orders
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href="/orders" color="primary">
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
				</div>
					)
			}

}
export default Orders;