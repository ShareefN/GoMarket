import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    {
      id: 1,
			//image: 'https://assets.indiadesire.com/images/Flipkart%20grand%20home%20appliance%20sale.jpg'
    },
    {
      id: 2,
			//image: 'https://www.lg.com/in/offers/images/he_tp_banner.jpg'
    },
    {
      id: 3,
			//image: 'http://tse1.mm.bing.net/th?q=Turner%20Appliance%20-%20in%20Clinton%20Iowa%20offers%20new%20appliances%20and%20parts'
    }
  ];

class Slider extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.id}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption}/>
          </CarouselItem>
        );
      });
  
      return (
        <div style={{marginBottom: '3%'}}>
          <style>
            {
              `.custom-tag {
                  max-width: 100%;
                  height: 500px;
                  background-image: url('https://www.lg.com/in/offers/images/he_tp_banner.jpg');
                }`
            }
          </style>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
      );
    }
  }
  
  export default Slider;