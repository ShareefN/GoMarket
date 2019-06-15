import React, { Component } from 'react';

class NewArrivals extends Component{
	constructor(props){
		super(props)
		this.state = {
			items: []
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
    
  render(){
    return(
			<div class="container">
				<h3>New Arrivals</h3>
				{this.state.items.map(item => {
					return(
				 <div class="row" className=".col-md-2">	
					<div class="card" style={{width: "18rem", height: "30rem", float: "left", margin: "25px"}}>
  					<img class="card-img-top" src={item.image} alt="Card image cap" />
  					<div class="card-body">
    					<h5 class="card-title">{item.title}</h5>
							<p class="card-text">{item.price} JD</p>
    					<a href="#" class="btn btn-primary" style={{margin: '20%'}}>Add To Cart</a>
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