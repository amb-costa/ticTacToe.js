import React, {useState} from "react";
import Board from "./board.jsx"

//Game: constructor for board function
const Game = () => {
  //hist: array with length=9 recording movements, init at null
  //current: number of movement translated to index, init at 0
  //currentTile: tile being played at the moment
  //xWeapon: X will have the first movement (odd indexes)
  let [history, setHistory] = useState([Array(9).fill(null)]);
  let [current, setCurrent] = useState(0);
  let currentTile = history[current];
  let xWeapon = current % 2 == 0;

  //handlePlay: updates history with new movement being made
  //nextHistory: cuts history to current tile, adds the new one to it
  //updates array that records movement history
  //updates index to record the movement being played
  function handlePlay(currentTile) {
    const nextHistory = [...history.slice(0, current + 1), currentTile];
    setHistory(nextHistory);
    setCurrent(nextHistory.length - 1);
  }

  const Reset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrent(0)
  }


  return (
    <div>
      <Board
        nextWeapon={xWeapon}
        tile={currentTile}
        onPlay={handlePlay}
        cleaning={Reset}
      />
    </div>
  );
};

export default Game;
