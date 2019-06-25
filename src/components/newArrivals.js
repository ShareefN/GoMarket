import React, { Component } from 'react';

class NewArrivals extends Component{
	constructor(props){
		super(props)
		this.state = {
			items: [],
			isSelected: [],
		}
	}

	componentDidMount(){
		fetch('/getNewArrivals').then(data => data.json())
		.then(data => {
			this.setState({
				items: data
			})
		})
	}

	itemSelected(index){
		var that = this
		this.setState({
			isSelected: this.state.items[index]
		},() => {fetch('/addToCart', {
			method: 'POST',
			body: JSON.stringify({name: that.state.isSelected.title, price: that.state.isSelected.price}),
			headers: { "Content-Type": "application/json" },
		}).then(response => {
			fetch('/addToOrders', {
				method: 'POST',
				body: JSON.stringify({name: that.state.isSelected.title, price: that.state.isSelected.price}),
				headers: { "Content-Type": "application/json" },
			}).then(data => {
				return data.json()
			}).catch(err => {
				console.log(err)
			})
			return response.json()
		}).then(data => {
			this.setState({
				isSelected: data
			})
			window.location.reload()
		}).catch(err => {
			console.log(err)
		})})
	}
    
  render(){
    return(
			<div class="container">
				<h3 style={{textDecoration: 'underline', textAlign: 'center'}}>New Arrivals</h3>
				{this.state.items.map((item, index) => {
					return(
				 <div class="row" className=".col-md-2">	
					<div class="card" style={{width: "18rem", height: "28rem", float: "left", margin: "35px"}}>
  					<img class="card-img-top" src={item.image}  style={{height: '15rem'}} alt="Card image cap" />
  					<div class="card-body">
    					<h5 class="card-title">{item.title}</h5>
							<p class="card-text">{item.price} JD</p>
    					<a class="btn btn-primary" style={{margin: '25%', color: "white"}} onClick={this.itemSelected.bind(this, index)}>Add To Cart</a>
  				</div>
				</div>
				</div>
					)
				})}
			</div>
        )
    }
}
export default NewArrivals;