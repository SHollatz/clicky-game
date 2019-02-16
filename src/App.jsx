import React, { Component } from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import Image from "./Components/Image";
import Footer from "./Components/Footer";
import goats from "./goats.json";
import Jumbotron from "./Components/Jumbotron";

class App extends Component {

  state = {
      goats: goats,
      message: "Click an image to begin!",
      score: 0, 
      topscore: 0
  }

  clickedElements = [];
  handleClick = event => {
    const {id} = event.target;
    if (this.clickedElements.includes(id)) {
      console.log("inside if double clicked");
      this.resetGame();
    } else {
      this.clickedElements.push(id);
      this.setState({score: this.state.score + 1});
      if (this.state.topscore <= this.state.score) {
        this.setState({topscore: this.state.topscore + 1});
        this.setState({message: "You cracked the Topscore!"})
      }
      this.shuffleGoats();
    }
  }

  resetGame = () => {
    this.setState({message: "Oh no, you had that one before! Try again"});
    this.setState({score: 0});
    this.shuffleGoats();
    this.clickedElements = [];
  }

  shuffleGoats = () => {
    const {goats} = this.state;
    let i = goats.length;
    if (i === 0) {
      return false;
    };
    while (--i) {
      let j = Math.floor(Math.random() * (i+1));
      let tempi=goats[i];
      var tempj = goats[j];
      goats[i] = tempj;
      goats[j] = tempi;
    }
    let shuffledGoats = goats;
    this.setState({goats: shuffledGoats});
  }

  render() {
    return (
      <div className="App">
        <Header className="Header"
        message={this.state.message}
        score={this.state.score}
        topscore={this.state.topscore}
        />
        <Jumbotron />
        <Wrapper >
          {this.state.goats.map(goat => (
            <Image
              id={goat.id}
              name={goat.alt}
              image={goat.image}
              alt={goat.alt}
              onClick={this.handleClick}
              key={goat.id}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
