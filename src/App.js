import "./styles.css";
import { useState, useEffect, useRef } from "react";
import Board from "./Board";

export default function App() {
  const [playerTurn, setPlayerTurn] = useState("X");
  const [gameStatus, setGameStatus] = useState("Initial");
  const [gameMode, setGameMode] = useState(2);
  const [theme, setTheme] = useState("Light");

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
    setGameStatus("Reset");
    setGameMode(2);
  };

  oneClicked = () => {
    setPlayerTurn("X");
    setGameStatus("Reset");
    setGameMode(1);
  };

  zeroClicked = () => {
    setPlayerTurn("X");
    setGameStatus("Reset");
    setGameMode(0);
  };

  themeClicked = () => {
    if (theme === "Light") {
      setTheme("Dark");
      return;
    }
    setTheme("Light");
  };

  return (
    <div id={"App" + theme}>
      <div id={"header" + theme}>
        <h1>Tic Tac Toe</h1>
        <label class="switch">
          <input type="checkbox" onClick={themeClicked} />
          <span class="slider round" />
        </label>
      </div>
      <h2 id="turnHeader">
        {gameStatus === "Draw" || gameStatus === "Initial" ? null : playerTurn}{" "}
        {gameStatus === "Initial" ? null : gameStatus}
      </h2>
      <Board
        playerTurn={playerTurn}
        nextPlayer={nextPlayer}
        gameResult={gameResult}
        gameStatus={gameStatus}
        gameMode={gameMode}
      />
      {gameStatus === "Won" || gameStatus === "Draw" || gameStatus === "Initial" ? (
        <div id="playAgain">
          <h2>
            {gameStatus === "Won" || gameStatus === "Draw"
              ? "Play Again?"
              : "Choose game mode."}
          </h2>
          <button className={"button" + theme} onClick={oneClicked}>
            1-Player
          </button>
          <button className={"button" + theme} onClick={twoClicked}>
            2-Player
          </button>
          <button className={"button" + theme} onClick={zeroClicked}>
            Auto
          </button>
        </div>
      ) : null}
    </div>
  );
}
