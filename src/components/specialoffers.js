import React, { Component } from 'react';

class SpecialOffers extends Component{
	constructor(props){
		super(props)
		this.state = {
			items: []
		}
	}

	componentDidMount(){
		fetch('/getSlides').then(data => data.json())
		.then(data => {
			this.setState({
				items: data
			})
		})
	}

	render(){
		return(
			<div class="container">
				<h3 style={{textDecoration: 'underline', textAlign: 'center'}}>Special Offers</h3>
				{this.state.items.map(item => {
					return(
				 <div class="row" className=".col-md-2">	
					<div class="card" style={{width: "18rem", height: "30rem", float: "left", margin: "35px"}}>
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
export default SpecialOffers;



// import React, { Component } from 'react';
// import { Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl } from 'reactstrap';

// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeIndex: 0, items: []};
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
// 	}
	
// 	componentDidMount(){
// 		fetch('/getSlides').then(data => data.json())
// 		.then(data => {
// 			this.setState({
// 				items: data
// 			})
// 		})
// 	}

//   onExiting() {
//     this.animating = true;
//   }

//   onExited() {
//     this.animating = false;
//   }

//   next() {
//     const nextIndex = this.state.activeIndex === this.items - 1 ? 0 : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   previous() {
//     const nextIndex = this.state.activeIndex === 0 ? this.items - 1 : this.state.activeIndex - 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   goToIndex(newIndex) {
//     this.setState({ activeIndex: newIndex });
//   }

//   render() {
//     const { activeIndex } = this.state;

//     const slides = this.state.items.map((item) => {
// 			return (
// 				<CarouselItem
// 				onExiting={this.onExiting}
// 				onExited={this.onExited}
//         >
// 				{/* <h3 style={{textDecoration: 'underline', textAlign: 'center'}}>Special Offers</h3> */}
// 					<div class="container" style={{marginBottom: '20px'}}>
//           <img src={item.image} style={{height: '10rem', width: '50rem', marginLeft: '10%'}}/>
// 					<CarouselCaption  style={{color: 'black', marginTop: '30%', color: 'black'}} />
// 					</div>
//         </CarouselItem>
//       );
//     });

//     return (
//       <Carousel
//         activeIndex={activeIndex}
//         next={this.next}
//         previous={this.previous}
//       >
//         <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//         {slides}
//         <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} style={{color: 'black'}}/>
//         <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
//       </Carousel>
//     );
//   }
// }
// export default Slider;


