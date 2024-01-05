import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function Board(props) {
  const [cells, setCells] = useState([
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ]);
  const hasMounted = useRef(false);
  const hasMounted2 = useRef(false);

  useEffect(() => {
    if (hasMounted2.current === false) {
      hasMounted2.current = true;
      return;
    }
    if (props.gameStatus === "Turn") {
      setCells(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
      hasMounted.current = false;
      hasMounted2.current = false;
    }
  }, [props.gameStatus]);

  useEffect(() => {
    if (hasMounted.current === false) {
      hasMounted.current = true;
      return;
    }
    if (!checkWin(cells) && !checkFull()) {
      if(props.nextPlayer()) {
        setTimeout(() => {autoPlay()}, 1000);
      }
    }
  }, [cells]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function autoPlay() {
    let x = getRandomInt(9);
    while(cells[x]!="-") {
      x = getRandomInt(9);
    }
    let y = cells.map((item, index) => {
      if(index===x) {
        return "O";
      }
      return item;
    })
    setCells(y);

  }
  

  function checkWin(x) {
    if (
      (x[0] === props.playerTurn &&
        x[1] === props.playerTurn &&
        x[2] === props.playerTurn) ||
      (x[3] === props.playerTurn &&
        x[4] === props.playerTurn &&
        x[5] === props.playerTurn) ||
      (x[6] === props.playerTurn &&
        x[7] === props.playerTurn &&
        x[8] === props.playerTurn) ||
      (x[0] === props.playerTurn &&
        x[3] === props.playerTurn &&
        x[6] === props.playerTurn) ||
      (x[1] === props.playerTurn &&
        x[4] === props.playerTurn &&
        x[7] === props.playerTurn) ||
      (x[2] === props.playerTurn &&
        x[5] === props.playerTurn &&
        x[8] === props.playerTurn) ||
      (x[0] === props.playerTurn &&
        x[4] === props.playerTurn &&
        x[8] === props.playerTurn) ||
      (x[2] === props.playerTurn &&
        x[4] === props.playerTurn &&
        x[6] === props.playerTurn)
    ) {
      props.gameResult("Won");
      return true;
    }
    return false;
  }

  function checkFull() {
    if (cells.indexOf("-") < 0 && props.gameStatus != "Won") {
      props.gameResult("Draw");
      return true;
    }
    return false;
  }

  function cellClicked(e) {
    if (props.gameStatus === "Won" || props.gameStatus === "Draw") {
      return;
    }
    if (cells[parseInt(e.target.id)] != "-") {
      return;
    }
    if (props.gameMode===1 && props.playerTurn==="O") {
      return;
    }
    let x = cells.map((item, index) => {
      if (index === parseInt(e.target.id)) {
        return props.playerTurn;
      } else {
        return item;
      }
    });

    setCells(x);
  }

  return (
    <div id="board">
      <div className="row">
        <div id="0" className="cell" onClick={cellClicked}>
          {cells[0]}
        </div>
        <div id="1" className="cell" onClick={cellClicked}>
          {cells[1]}
        </div>
        <div id="2" className="cell" onClick={cellClicked}>
          {cells[2]}
        </div>
      </div>
      <div className="row">
        <div id="3" className="cell" onClick={cellClicked}>
          {cells[3]}
        </div>
        <div id="4" className="cell" onClick={cellClicked}>
          {cells[4]}
        </div>
        <div id="5" className="cell" onClick={cellClicked}>
          {cells[5]}
        </div>
      </div>
      <div className="row">
        <div id="6" className="cell" onClick={cellClicked}>
          {cells[6]}
        </div>
        <div id="7" className="cell" onClick={cellClicked}>
          {cells[7]}
        </div>
        <div id="8" className="cell" onClick={cellClicked}>
          {cells[8]}
        </div>
      </div>
    </div>
  );
}
