import React, { Component } from 'react';

class SpecialOffers extends Component{
	constructor(props){
		super(props)
		this.state = {
			items: [],
			isSelected: [],
		}
	
	}

	componentDidMount(){
		fetch('/getSpecialOffers').then(data => data.json())
		.then(data => {
			this.setState({
				items: data
			})
		})
	}

	itemSelected(index){
		this.setState({
			isSelected: this.state.items[index]
		}, ()=>console.log(this.state.isSelected))
		
		fetch('/addToCart', {
			method: 'POST',
			body: JSON.stringify(this.state.isSelected),
			headers: { "Content-Type": "application/json" },
		}).then(response => {
			return response.json()
		}).catch(err => {
			console.log(err)
		})
	}

	render(){
		return(
			<div class="container">
				<h3 style={{textDecoration: 'underline', textAlign: 'center'}}>Special Offers</h3>
				{this.state.items.map((item, index) => {
					return(
				 <div key={index} class="row" className=".col-md-2">	
					<div class="card" style={{width: "18rem", height: "30rem", float: "left", margin: "35px"}}>
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
export default SpecialOffers;


