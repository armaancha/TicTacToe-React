import "./styles.css";
import { useState, useEffect, useRef } from "react";
import Board from "./Board";

export default function App() {
  const [playerTurn, setPlayerTurn] = useState("X");
  const [gameStatus, setGameStatus] = useState("Turn");

  nextPlayer = () => {
    if (playerTurn === "X") {
      setPlayerTurn("O");
    } else {
      setPlayerTurn("X");
    }
  };

  gameResult = (x) => {
    setGameStatus(x);
  };

  twoClicked = () => {
    setPlayerTurn("X");
    setGameStatus("Turn");
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <h2 id="turnHeader">
        {gameStatus === "Draw" ? null : playerTurn} {gameStatus}
      </h2>
      <Board
        playerTurn={playerTurn}
        nextPlayer={nextPlayer}
        gameResult={gameResult}
        gameStatus={gameStatus}
      />
      {gameStatus === "Won" || gameStatus === "Draw" ? (
        <div id="playAgain">
          <h2>Play Again?</h2>
          <button>1-Player</button>
          <button onClick={twoClicked}>2-Player</button>
        </div>
      ) : null}
    </div>
  );
}
