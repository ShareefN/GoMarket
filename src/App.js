import React, { Component } from 'react';
import { async } from 'q';

class App extends Component{
    state = {
      renderedResponse: '',
    };
  
  
  getRespone = async() => {
    const response = await fetch('/');
    // const body = await response.json();

    if(response.status !== 200) {
      console.log('Error NOT_FOUND')
    }else{
      return response;
    }
  }

  componentDidMount(){
    this.getRespone()
    .then(res => {
      const someData = res;
      this.setState({ renderedResponse: someData })
    })
  }

  render(){
    const { renderedResponse } = this.state;
    return(
      <div>
        <h1>GoMarket</h1>
        <p>{ renderedResponse.express  }</p>
      </div>
    )
  }
}

export default App;
