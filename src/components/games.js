import React, { Component } from 'react';

class Games extends Component{
		constructor(props){
				super(props)
				this.state = {
						items: [],
						isSelected: [],
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

		itemSelected(index){
			var that = this;
			this.setState({
				isSelected: this.state.items[index]
			}, () => {fetch('/addToCart', {
				method: 'POST',
				body: JSON.stringify({name: that.state.isSelected.title, price: that.state.isSelected.price}),
			 headers: { "Content-Type": "application/json" },
			}).then(data => {
				return data.json()
			}).then(data => {
				this.setState({
					isSelected: data
				})
				window.location.reload()
			})
		}).catch(err => {
			console.log(err)
		})
		}

		render(){
			return(
				<div class="container">
					<h3>Games</h3>
					{this.state.items.map((item, index) => {
						return(
					 <div class="row" className=".col-md-2">	
						<div class="card" style={{width: "18rem", height: "30rem", float: "left", margin: "35px"}}>
							<img class="card-img-top" src={item.image}  style={{height: '15rem', width: '17rem', borderRadius: '10%'}} alt="Card image cap" />
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
export default Games;