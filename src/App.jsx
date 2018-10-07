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
      isclicked: {1: "false",
                  2: "false"},
      score: 0, 
      topscore: 0
    }

  handleClick = event => {
    console.log(event.target);
    const {id} = event.target;
    console.log("id", id);
    this.setState({
      [isclicked[id]]: "true"})
    // let element = document.getElementById(id);
    // console.log("element", element);
    // element.setAttribute("isclicked", "true");
    this.countScore(); 
    // this.forceUpdate();
  }

  countScore = () => {
     this.setState({score: this.state.count + 1});
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
              isclicked={this.state.isclicked[goat.id]}
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
