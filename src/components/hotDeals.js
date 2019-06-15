import React, { Component } from 'react';

class HotDeals extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: []
		}
	}
	
	componentDidMount(){
		fetch('/getHotDeals').then(data => data.json())
		.then((data) => {
			this.setState({
				items: data
			})
		})
	}


	render(){
		return(

			<div class="container">
			<h3>Hot Deals</h3>
			{this.state.items.map(item => {
				return(
				<div class="card" style={{width: '18rem', height: "30rem",  float: "left", margin: "25px"}}>
  			<img class="card-img-top" src={item.image} alt="Card image cap" />
  			<div class="card-body">
    		<h5 class="card-title">{item.title}</h5>
    		<p class="card-text">{item.price} JD</p>
    		<a href="#" class="btn btn-primary">Add To Cart</a>
  			</div>
				</div>
				)
			})}
		</div>
    )
  }
}
export default HotDeals;