import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      sushis: [],
      firstShownID: 1,
      eatenSushi: [],
      walletBalance: 100
    }
  }

  eatSushi = (sushiObj) => {
    if (this.state.eatenSushi.includes(sushiObj.id)){
      return
    } else if (this.state.walletBalance >= sushiObj.price){
      let newlyEatenSushi = sushiObj.id

      this.setState({
        eatenSushi: [...this.state.eatenSushi, newlyEatenSushi],
        walletBalance: this.state.walletBalance - sushiObj.price
      })
    } else {
      alert('not enough money, baby')
    }

  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(res => res.json())
    .then(data => this.setState({sushis: data}))
  }

  handleMoreClick = () => {
    this.setState({
      firstShownID: this.state.firstShownID+4
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi} handleMoreClick={this.handleMoreClick} currentFour={this.state.sushis.slice(this.state.firstShownID, this.state.firstShownID+4)}/>
        <Table walletBalance={this.state.walletBalance} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
