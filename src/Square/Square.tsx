import React from "react";

function Square({value}: {value: number}) {
  return (
    <>
      <button className="square" onClick={handleClick}>{ value }</button>
    </>
  );

  function handleClick() {
    console.log("clicked");
  }
}

export default Square;
