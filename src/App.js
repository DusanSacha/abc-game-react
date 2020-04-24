import React, { Component } from 'react';
import './App.css';
import logo from './mrs_chicken_logo.png';
import home from './mrs_chicken_home.png';
import home_final from './mrs_chicken_home_final.png';
import peep from './peep.wav';
import final from './happy_birthday_song.wav';

class App extends Component {

  constructor(props){
    super(props);

     this.characters = 'ABCDEFKLMNOPRSTUVZ';
     this.key = this.characters[this.getRandomInt(0,this.characters.length)]

     this.state = { 
      characters: this.characters,
      key: this.key,
      score: 0,
      jump: 0,
    }
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

   componentDidMount(){
     document.addEventListener("keydown", this.keyDownListener, false);
   }

  keyDownListener = keyPressed => {
    console.log(keyPressed);
    if (keyPressed.key.toUpperCase() === this.state.key) {
      this.setState((state, props) => {
        return {
          key: this.characters[this.getRandomInt(0,this.characters.length)],
          jump: state.jump + 100,
          score: state.score + 1
        }
      })
     
      this.audio = new Audio(peep);
      this.audio.load();
      const aud = this.audio.play();
 
       aud.then( _ => {
 
       }
       ).catch(
         err => {console.log(err)}
       );      


    }
    
  }

  render(){
    let inputStyle = {marginRight:this.state.jump+'px'}
    
    let displayNone = {};
    let chickenHouse = home;
    if (this.state.score >= 12) {
      chickenHouse = home_final
      displayNone = {display:'none'};
      inputStyle = {...inputStyle, display:'none'}

      this.audio = new Audio(final);
      this.audio.load();
      const aud = this.audio.play();
 
       aud.then( () => {
 
       }
       ).catch(
         err => {console.log(err)}
       ); 

    }
    


    return <div className="App">
      {/*<h1>Score:{this.state.score}</h1>*/}
      <div className="board">
        <img src={chickenHouse} className="home" alt="home"/>
        <img style={inputStyle} src={logo} className="App-logo chicken" alt="chicken"/>
      </div>      
      <div>
        
      </div>
      <h1 style={displayNone}>{this.state.key}</h1>
      </div>
  }

}


export default App;
