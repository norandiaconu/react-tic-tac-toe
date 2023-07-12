import Board from "Board/Board";
import React, { useState } from "react";
import './Game.css';

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  let description;
  const moves = history.map((squares, move) => {
    if (move === 0) {
      description = "Go to game start";
    } else if (move === currentMove) {
      description = "You are at move #" + move;
    } else {
      description = "Go to move #" + move;
    }
    return (
      <li key={move}>
        {move !== currentMove && <button onClick={() => setCurrentMove(move)}>{description}</button>}
        {move === currentMove && move !== 0 && <div>You are at move #{move}</div>}
        {move === 0 && currentMove === 0 && <div>You are at the start of the game</div>}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol start={0}>{moves}</ol>
      </div>
    </div>
  );

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
}

export default Game;
