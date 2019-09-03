import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      sushiIndex: 0,
      budget: 100
    };
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushis => {
        let sushiArray = sushis.map(sushi => {
          return { ...sushi, eaten: false };
        });
        this.setState({ sushis: sushiArray });
      });
  }

  getMoreSushis() {
    let sushiArray = this.state.sushis.slice(
      this.state.sushiIndex,
      this.state.sushiIndex + 4
    );

    return sushiArray;
  }

  handleMoreButton = () => {
    this.setState({
      sushiIndex:
        this.state.sushiIndex + 4 < this.state.sushis.length
          ? this.state.sushiIndex + 4
          : 0
    });
  };

  handleEatSushi = sushiObj => {
    let sushiArray = this.state.sushis.map(sushi => {
      if (sushi.id === sushiObj.id) {
        if (this.state.budget >= sushiObj.price) {
          sushi.eaten = true;
          this.setState({ budget: this.state.budget - sushiObj.price });
        } else {
          alert("you do not have enough money");
        }
        return sushi;
      } else {
        return sushi;
      }
    });
    this.setState({ sushis: sushiArray });
  };

  getEatenSushis() {
    return this.state.sushis.filter(sushi => sushi.eaten);
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          handleEatSushi={this.handleEatSushi}
          handleMoreButton={this.handleMoreButton}
          sushis={this.getMoreSushis()}
        />
        <Table
          eatenSushisArray={this.getEatenSushis()}
          budget={this.state.budget}
        />
      </div>
    );
  }
}

export default App;
