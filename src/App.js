import "./styles.css";
import { useState, useEffect, useRef } from "react";
import Board from "./Board";

export default function App() {
  const [playerTurn, setPlayerTurn] = useState("X");
  const [gameStatus, setGameStatus] = useState("Initial");
  const [gameMode, setGameMode] = useState(2);

  nextPlayer = () => {
    if (playerTurn === "X") {
      setPlayerTurn("O")
      if (gameMode===1) {
        return true;
      }
    } else {
      setPlayerTurn("X");
      return false;
    }
  };

  gameResult = (x) => {
    setGameStatus(x);
  };

  twoClicked = () => {
    setPlayerTurn("X");
    setGameStatus("Turn");
    setGameMode(2);
  };

  oneClicked = () => {
    setPlayerTurn("X");
    setGameStatus("Turn");
    setGameMode(1);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <h2 id="turnHeader">
        {gameStatus === "Draw" || gameStatus === "Initial" ? null : playerTurn} {gameStatus === "Initial" ? null : gameStatus}
      </h2>
      <Board
        playerTurn={playerTurn}
        nextPlayer={nextPlayer}
        gameResult={gameResult}
        gameStatus={gameStatus}
        gameMode={gameMode}
      />
      {gameStatus === "Won" || gameStatus === "Draw" || gameStatus==="Initial" ? (
        <div id="playAgain">
          <h2>{gameStatus === "Won" || gameStatus==="Draw" ? "Play Again?" : "Choose game mode."}</h2>
          <button onClick={oneClicked}>1-Player</button>
          <button onClick={twoClicked}>2-Player</button>
        </div>
      ) : null}
    </div>
  );
}
