import React, { Component } from 'react';

class HotDeals extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	
	render(){
		
		return(
			<div class="container">
			<h3>Hot Deals</h3>
    <div class="card" style={{width: '18rem',  float: "left", margin: "10px"}}>
  	<img class="card-img-top" src="..." alt="Card image cap" />
  	<div class="card-body">
    <h5 class="card-title"> title</h5>
    <p class="card-text">price</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
  	</div>
		</div>
		</div>
    )
  }
}
export default HotDeals;