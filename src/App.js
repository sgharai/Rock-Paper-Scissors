// import React from 'react';
// import logo from './logo.svg';
import './App.css';

// prompt for player name and rps x2

//switch statements for each of player 1's choices

function rockPaperScissors() {
  let player1 = {
    name: prompt("Enter Player 1's name: "),
    choice: prompt("Player 1, enter rock, paper or scissors!")
  }
  let player2 = {
    name: prompt("Enter Player 2's name: "),
    choice: prompt("Player 2, enter rock, paper or scissors!")
  }

  if(player1.choice === "rock") {
    switch(player2.choice){
      case "paper":
        console.log(`${player2.name} wins!`);
        break;
      case "scissors":
        console.log(`${player1.name} wins!`);
        break;
      case "rock":
        console.log("Tie!");
        break;
      default:
        alert("Please enter a valid choice.");
    }
  } else if(player1.choice === "paper") {
    switch(player2.choice){
      case "scissors":
        console.log(`${player2.name} wins!`);
        break;
      case "rock":
        console.log(`${player1.name} wins!`);
        break;
      case "paper":
        console.log("Tie!")
        break;
      default:
        alert("Please enter a valid choice.");
     } 
    } else if(player1.choice === "scissors") {
      switch(player2.choice){
        case "rock":
          console.log(`${player2.name} wins!`);
          break;
        case "paper":
          console.log(`${player1.name} wins!`);
          break;
        case "scissors":
          console.log("Tie!")
          break;
        default:
          alert("Please enter a valid choice.");
        }
      } else {
        console.log("Please enter a valid choice.")
      }
  return null;
}

export default rockPaperScissors;
