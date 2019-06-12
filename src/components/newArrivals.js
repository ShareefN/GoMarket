import React, { Component } from 'react';
import Iphone from '../dataImages/i.jpg';
import Huawei from '../dataImages/Huawei.jpg';
import Samsung from '../dataImages/samsung.jpg';

class NewArrivals extends Component{
    
  render(){
		const product = [
			{id: 1, name: 'IphoneXS Max', image: { Iphone }, price: '860'},
			{id: 2, name: 'Huawei', image: { Huawei }, price: '650'},
			{id: 3, name: 'Samsung', image: { Samsung }, price: '800'},
		] 
				
    return(
			<div class="container">
				<h3>New Arrivals</h3>
				 <div class="row" className=".col-md-2">	
					<div class="card" style={{width: "18rem", height: "15rem", float: "left", margin: "10px"}}>
  					<img class="card-img-top" src={Iphone} alt="Card image cap" />
  					<div class="card-body">
    					<h5 class="card-title">Iphone Xs Max</h5>
    					<p class="card-text">Super Retina in two sizes including the largest display ever on an iPhone. Even faster Face ID. </p>
    					<a href="#" class="btn btn-primary" style={{margin: '20%'}}>Add To Cart</a>
  				</div>
				</div>
				<div class="card" style={{width: "18rem", height: "15rem", float: "left", margin: "10px"}}>
  					<img class="card-img-top" src={Iphone} alt="Card image cap" />
  					<div class="card-body">
    					<h5 class="card-title">Iphone Xs Max</h5>
    					<p class="card-text">Super Retina in two sizes including the largest display ever on an iPhone. Even faster Face ID. </p>
    					<a href="#" class="btn btn-primary" style={{margin: '20%'}}>Add To Cart</a>
  				</div>
				</div>
				<div class="card" style={{width: "18rem", height: "15rem", float: "left", margin: "10px"}}>
  					<img class="card-img-top" src={Iphone} alt="Card image cap" />
  					<div class="card-body">
    					<h5 class="card-title">Iphone Xs Max</h5>
    					<p class="card-text">Super Retina in two sizes including the largest display ever on an iPhone. Even faster Face ID. </p>
    					<a href="#" class="btn btn-primary" style={{margin: '20%'}}>Add To Cart</a>
  				</div>
				</div>
			</div>
		</div>
        )
    }
}
export default NewArrivals;