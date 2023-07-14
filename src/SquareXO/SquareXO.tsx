import React from "react";
import './SquareXO.css';

interface Props {
    value: string,
    onSquareClick: () => void,
    winningSquare: boolean | undefined,
}

const SquareXO: React.FC<Props> = (props) => {
  return (
    <button className={`square ${props.winningSquare ? "winningSquare" : ""}`} onClick={props.onSquareClick}>{ props.value }</button>
  );
}

export default SquareXO;
