import React, { Component } from 'react';
import './App.css';
import peep from './assets/peep.wav';
import peep_final from './assets/happy_birthday_song.wav';
import House from './House';
import LetterBox from './LetterBox';
import Chicken from './Chicken';
import {
  GAME_OVER,
  GAME_STARTED
} from './lib/game-state';

class App extends Component {

  constructor(props){
    super(props);

    this.letters = 'ABCDEFKLMNOPRSTUVZ';
    this.getRandomLetter = () => this.letters[Math.floor(Math.random() * this.letters.length)];
    this.sound = new Audio(peep);

    this.state = {
      gameState: GAME_STARTED,
      step: 0,
      letter: this.getRandomLetter()
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyDownListener, false);
  }


  keyDownListener = (keyPressed) => {
    if (keyPressed.key.toUpperCase() === this.state.letter) {
      

      if (this.state.step === 11) {
        this.sound = new Audio(peep_final);
        this.setState({
          gameState: GAME_OVER
        })
      } else {
        this.setState((prevState) => ({
          step: prevState.step + 1,
          letter: this.letters[Math.floor(Math.random() * this.letters.length)]
        }));

      }

      this.sound.load();
      this.sound.play().then( _ => {
      }
      ).catch( err => {console.log(err)} );  
    }
  }
  
  render(){
    return (<div className="App">
    <House gameState={this.state.gameState} />
    <Chicken step={this.state.step} gameState={this.state.gameState}/>
    <LetterBox letter={this.state.letter} gameState={this.state.gameState}/>
  </div>);
  }
}

export default App;



