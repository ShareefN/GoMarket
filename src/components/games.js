import React, { Component } from 'react';

class Games extends Component{
		constructor(props){
				super(props)
				this.state = {
						items: [],
				}
		}

		componentDidMount(){
				fetch('/getGames').then(data => data.json())
				.then(data => {
						this.setState({
								items: data
						})
				})
		}

		render(){
			return(
				<div class="container">
					<h3>Games</h3>
					{this.state.items.map(item => {
						return(
					 <div class="row" className=".col-md-2">	
						<div class="card" style={{width: "18rem", height: "28rem", float: "left", margin: "35px"}}>
							<img class="card-img-top" src={item.image}  style={{height: '15rem'}} alt="Card image cap" />
							<div class="card-body">
								<h5 class="card-title">{item.title}</h5>
								<p class="card-text">{item.price} JD</p>
								<a class="btn btn-primary" style={{margin: '25%', color: "white"}}>Add To Cart</a>
						</div>
					</div>
					</div>
						)
					})}
				</div>
			)
		}

}
export default Games;