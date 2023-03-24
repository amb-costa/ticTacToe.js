import React, { useState } from "react";

//Win: checks if selected tiles cover a whole row, column or diagonal
function Win(tile) {
  //combs: every 3 index combination: rows, columns, diagonal
  //each combination has 3 indexes: array of arrays
  const combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < combs.length; index++) {
    const [a, b, c] = combs[index];
    if (tile[a] && tile[a] === tile[b] && tile[a] === tile[c]) {
      return tile[a];
    }
  }
  return null;
}

//Board: constructor for game structure
function Board({ nextWeapon, tile, onPlay}) {
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
    <>
      <h3>{status}</h3>
      <button>Click me to reset!</button>
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
    </>
  );
}

//Game: constructor for board function
const Game = () => {
  //hist: array with length=9 recording movements, init at null
  //current: number of movement translated to index, init at 0
  //currentTile: tile being played at the moment
  //xWeapon: X will have the first movement (odd indexes)
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [current, setCurrent] = useState(0);
  const currentTile = history[current];
  const xWeapon = current % 2 == 0;

  //handlePlay: updates history with new movement being made
  //nextHistory: cuts history to current tile, adds the new one to it
  //updates array that records movement history
  //updates index to record the movement being played
  function handlePlay(currentTile) {
    const nextHistory = [...history.slice(0, current + 1), currentTile];
    setHistory(nextHistory);
    setCurrent(nextHistory.length - 1);
  }

  return (
    <div>
      <Board nextWeapon={xWeapon} tile={currentTile} onPlay={handlePlay}/>
    </div>
  );
};

export default Game;
