import React from "react";
import Win from "./win.jsx";

//Board: constructor for game structure
function Board({ nextWeapon, tile, onPlay, cleaning}) {
    let status = "";
    let movement = Win(tile);
    if (movement) {
      status = movement + " Wins!";
    } else {
      if (nextWeapon) {
        status = "It's X turn!";
      } else {
        status = "It's O turn!";
      }
    }
  
    function handleClick(index) {
      const nextTile = tile.slice();
      if (Win(tile) || tile[index]) {
        return;
      }
      if (nextWeapon) {
        nextTile[index] = "X";
      } else {
        nextTile[index] = "O";
      }
      onPlay(nextTile);
    }
  
  
    return (
      <div id="game">
        <h1>Tic-Tac-Toe in React.js</h1>
        <h3>{status}</h3>
        <button onClick={cleaning}>Click me to reset!</button>
        <div id="actualBoard">
          <div className="row">
            <div className="col" type="button" onClick={() => handleClick(0)}>
              {tile[0]}
            </div>
            <div className="col" type="button" onClick={() => handleClick(1)}>
              {tile[1]}
            </div>
            <div className="col" type="button" onClick={() => handleClick(2)}>
              {tile[2]}
            </div>
          </div>
          <div className="row">
            <div className="col" type="button" onClick={() => handleClick(3)}>
              {tile[3]}
            </div>
            <div className="col" type="button" onClick={() => handleClick(4)}>
              {tile[4]}
            </div>
            <div className="col" type="button" onClick={() => handleClick(5)}>
              {tile[5]}
            </div>
          </div>
          <div className="row">
            <div className="col" type="button" onClick={() => handleClick(6)}>
              {tile[6]}
            </div>
            <div className="col" type="button" onClick={() => handleClick(7)}>
              {tile[7]}
            </div>
            <div className="col" type="button" onClick={() => handleClick(8)}>
              {tile[8]}
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Board;