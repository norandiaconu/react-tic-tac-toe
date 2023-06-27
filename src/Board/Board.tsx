import React, { useState } from 'react';
import './Board.css';
import Square from 'Square/Square';
import SquareState from 'SquareState/SquareState';
import SquareXO from 'SquareXO/SquareXO';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <SquareXO value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <SquareXO value={squares[2]} onSquareClick={() => handleClick(2)}/>
        <SquareXO value={squares[3]} onSquareClick={() => handleClick(3)}/>
      </div>
      <div className="board-row">
        <SquareXO value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <SquareXO value={squares[5]} onSquareClick={() => handleClick(5)}/>
        <SquareXO value={squares[6]} onSquareClick={() => handleClick(6)}/>
      </div>
      <div className="board-row">
        <SquareXO value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <SquareXO value={squares[8]} onSquareClick={() => handleClick(8)}/>
        <SquareXO value={squares[9]} onSquareClick={() => handleClick(9)}/>
      </div>

      <div className="old-row">
        <div className="mr10">
          <div className="board-row">
            <SquareState />
            <SquareState />
            <SquareState />
          </div>
          <div className="board-row">
            <SquareState />
            <SquareState />
            <SquareState />
          </div>
          <div className="board-row">
            <SquareState />
            <SquareState />
            <SquareState />
          </div>
        </div>

        <div>
          <div className="board-row">
            <Square value={1} />
            <Square value={2} />
            <Square value={3} />
          </div>
          <div className="board-row">
            <Square value={4} />
            <Square value={5} />
            <Square value={6} />
          </div>
          <div className="board-row">
            <Square value={7} />
            <Square value={8} />
            <Square value={9} />
          </div>
        </div>
      </div>
    </>
  );

  function handleClick(i: number) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
}

export default Board;
