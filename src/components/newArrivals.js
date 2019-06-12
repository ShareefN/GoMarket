import React, { Component } from 'react';

class NewArrivals extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){
        return(
					<div class="container">
						<h3>New Arrivals</h3>
						 <div class="row">
					
					<div className=".col-md-4">
					<div class="card" style={{width: "18rem", height: "15rem", float: "left", margin: "10px"}}>
  				<img class="card-img-top" src="http://cdn.shopify.com/s/files/1/1043/3082/products/iPhoneXSMax_line_up_1200x630.jpg?v=1538647006" alt="Card image cap" />
  					<div class="card-body">
    					<h5 class="card-title">Iphone Xs Max</h5>
    					<p class="card-text">Super Retina in two sizes — including the largest display ever on an iPhone. Even faster Face ID. </p>
    					<a href="#" class="btn btn-primary" style={{margin: '20%'}}>Place In Cart</a>
  						</div>
							</div>
							<div className=".col-md-4">
							<div class="card" style={{width: "18rem", height: "15rem", float: "left", margin: "10px"}}>
  				<img class="card-img-top" src="https://cellucity.co.za/wp-content/uploads/2019/03/Huawei_P30Plus-002.jpg" alt="Card image cap" />
  					<div class="card-body">
    					<h5 class="card-title">HUAWEI P30 Pro</h5>
    					<p class="card-text">Zoom in to explore the mystery of the celestial at night, watch an eagle hovering over trees or examine the delicate details of crystal.</p>
    					<a href="#" class="btn btn-primary" style={{margin: '20%'}}>Place In Cart</a>
  						</div>
							</div>
							
							<div class="card" style={{width: "18rem", height: "15rem", float: "left", margin: "10px"}}>
  				<img class="card-img-top" src="https://www.computers.co.ug/wp-content/uploads/2018/11/samsng_note_9.jpg" alt="Card image cap" />
  					<div class="card-body">
    					<h5 class="card-title">Iphone Xs Max</h5>
    					<p class="card-text">Galaxy Note9 puts powerful technology in the hands of pioneers who demand more. Innovative features and design make it the only phone to keep up with the next generation of achievers.</p>
    					<a href="#" class="btn btn-primary" style={{margin: '20%'}}>Place In Cart</a>
  						</div>
							</div>
					</div>
					</div>
					</div>
					</div>
        )
    }
}
export default NewArrivals;