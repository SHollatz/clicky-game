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
      message: "",
      score: 0, 
      topscore: 0
  }

  clickedElements = [];
  handleClick = event => {
    const {id} = event.target;
    let topscore = this.state.score;
    this.setState({message: ""});
    if (this.clickedElements.length === 12) {
      this.clickedElements = [];
    }
    if (this.clickedElements.includes(id)) {
      this.resetGame();
    } else {
      this.clickedElements.push(id);
      this.setState({score: this.state.score + 1});
      if (this.state.topscore <= this.state.score) {
        topscore += 1;
        this.setState({topscore: topscore});
        this.setState({message: "You cracked the Topscore!"})
        if (topscore === 12) {
          this.setState({message: "You are amazing! You clicked all 12 goats without mistake! Keep going!!"})
          this.shuffleGoats();
        }
      }
      this.shuffleGoats();
    }
  }

  resetGame = () => {
    this.setState({message: "Oh no, you had that one already! Try again"});
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
        <Header
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
