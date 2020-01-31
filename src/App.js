import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

// prompt for player name and rps x2

//switch statements for each of player 1's choices



class App extends React.Component {
  // state = {
  //   player1choice: "rock", 
  //   player2choice: "rock"
  // }

  constructor() {
    super()
    this.state = {
      player1choice: "", 
      player2choice: "",
      result: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.rockPaperScissors = this.rockPaperScissors.bind(this)
}

  handleChange(event) {
    const {name, value, type, checked} = event.target
    this.setState({ [name]: value })
  }
  
  render() {

    return (
      <div style={{textAlign: 'center'}}>
        <form>
          <h2>Player 1's Choice: </h2>
          <label>
              <input 
                  type="radio" 
                  name="player1choice"
                  value="rock"
                  checked={this.state.player1choice === "rock"}
                  onChange={this.handleChange}
              /> Rock
          </label>
          <label>
              <input 
                  type="radio" 
                  name="player1choice"
                  value="paper"
                  checked={this.state.player1choice === "paper"}
                  onChange={this.handleChange}
              /> Paper
          </label>
          <label>
              <input 
                  type="radio" 
                  name="player1choice"
                  value="scissors"
                  checked={this.state.player1choice === "scissors"}
                  onChange={this.handleChange}
              /> Scissors
          </label>
          <br />
          <h2>Player 2's Choice: </h2>
          <label>
              <input 
                  type="radio" 
                  name="player2choice"
                  value="rock"
                  checked={this.state.player2choice === "rock"}
                  onChange={this.handleChange}
              /> Rock
          </label>
          <label>
              <input 
                  type="radio" 
                  name="player2choice"
                  value="paper"
                  checked={this.state.player2choice === "paper"}
                  onChange={this.handleChange}
              /> Paper
          </label>
              <label>
              <input 
                  type="radio" 
                  name="player2choice"
                  value="scissors"
                  checked={this.state.player2choice === "scissors"}
                  onChange={this.handleChange}
              /> Scissors
          </label>
          <br/><br/>
          <button type="button" onClick={this.rockPaperScissors}>Play</button>
        </form>
        <br/><br/>
        <h1>{this.state.result}</h1>
      </div>
    )
  }

  
  rockPaperScissors() {
    let player1choice = this.state.player1choice
    let player2choice = this.state.player2choice
    let result;

    if(player1choice === "rock") {
      switch(player2choice){
        case "paper":
          result = "Player 2 wins!";
          break;
        case "scissors":
          result = "Player 1 wins!"
          break;
        case "rock":
          result = "Tie!";
          break;
        default:
          alert("Please enter a valid choice.");
      }
    } else if(player1choice === "paper") {
      switch(player2choice){
        case "scissors":
          result = "Player 2 wins!"
          break;
        case "rock":
          result = "Player 1 wins!"
          break;
        case "paper":
          result = "Tie!";
          break;
        default:
          alert("Please enter a valid choice.");
       } 
      } else if(player1choice === "scissors") {
        switch(player2choice){
          case "rock":
            result = "Player 2 wins!"
            break;
          case "paper":
            result = "Player 1 wins!"
            break;
          case "scissors":
            result = "Tie!";
            break;
          default:
            alert("Please enter a valid choice.");
          }
        } else {
          alert("Please enter a valid choice.")
        }
    
    this.setState({ result: result })
    return false;
    
  }


}
export default App;