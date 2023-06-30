import React from 'react';
import './Board.css';
import Square from 'Square/Square';
import SquareState from 'SquareState/SquareState';
import SquareXO from 'SquareXO/SquareXO';

type Props = {
  xIsNext: boolean;
  squares: string[];
  onPlay: Function;
}

function Board(props: Props) {
  const xIsNext = props.xIsNext;
  const squares = props.squares;
  const onPlay = props.onPlay;
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <SquareXO value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <SquareXO value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <SquareXO value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <SquareXO value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <SquareXO value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <SquareXO value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <SquareXO value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <SquareXO value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <SquareXO value={squares[8]} onSquareClick={() => handleClick(8)}/>
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
    if(squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  function calculateWinner(squares: string[]) {
    const lines  = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}

export default Board;
