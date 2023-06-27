import React from "react";
import { useState } from "react";

function SquareState() {
  const [value, setValue] = useState("");
  return (
    <>
      <button className="square" onClick={handleClick}>{ value }</button>
    </>
  );

  function handleClick() {
    setValue("X");
  }
}

export default SquareState;
