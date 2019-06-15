import React, { Component } from 'react';

class NewArrivals extends Component{
    
  render(){
    return(
			<div class="container">
				<h3>New Arrivals</h3>
				 <div class="row" className=".col-md-2">	
					<div class="card" style={{width: "18rem", height: "15rem", float: "left", margin: "10px"}}>
  					<img class="card-img-top" src="" alt="Card image cap" />
  					<div class="card-body">
    					<h5 class="card-title">title</h5>
							<p class="card-text">Price</p>
    					<a href="#" class="btn btn-primary" style={{margin: '20%'}}>Add To Cart</a>
  				</div>
				</div>
				</div>
			</div>
        )
    }
}
export default NewArrivals;