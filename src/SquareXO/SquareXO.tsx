import React from "react";

interface Props {
    value: string,
    onSquareClick: () => void,
}

const SquareXO: React.FC<Props> = (props) => {
  return (
    <button className="square" onClick={props.onSquareClick}>{ props.value }</button>
  );
}

export default SquareXO;
