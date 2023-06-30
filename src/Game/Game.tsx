import Board from "Board/Board";
import React, { useState } from "react";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );

  function handlePlay(nextSquares: any) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
}

export default Game;
