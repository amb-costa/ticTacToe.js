import React, {useState} from "react"

//Win: checks if selected tiles cover a whole row, column or diagonal
function Win(tile) {
    //combs: every 3 index combination: rows, columns, diagonal
    //each combination has 3 indexes: array of arrays
    const combs = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let index=0; index<combs.length; index++) {
        const [a,b,c]=combs[index];
        if (tile[a]&&tile[a]===tile[b]&&tile[b]===tile[c]) {
            return tile[a];
        }
    }
    return null
};

//Board: constructor for game structure
function Board ({nextWeapon, tile, onPlay}) {
    function handleClick(index) {
        if (Win(tile) && tile[index]) {
            return;
        }
        const nextTile = tile.slice;
        if (nextWeapon) {
            nextTile[index]="X"
        } else {
            nextTile[index]="O"
        }
        onPlay(nextTile)
    }
    const finish = Win(tile);
    let status;
    if (finish!=null) {
        status= finish + " Wins!"
    } else {
        status= "It's " + finish + " turn!"
    }

    return (<>
    <h3>{status}</h3>
    <div className="row">
        <button value={tile[0]} onClick={handleClick(0)}/>
        <button value={tile[1]} onClick={handleClick(1)}/>
        <button value={tile[2]} onClick={handleClick(2)}/>
    </div>
    <div className="row">
        <button value={tile[3]} onClick={()=>handleClick(3)}/>
        <button value={tile[4]} onClick={()=>handleClick(4)}/>
        <button value={tile[5]} onClick={()=>handleClick(5)}/>
    </div>
    <div className="row">
        <button value={tile[6]} onClick={handleClick(6)}/>
        <button value={tile[7]} onClick={handleClick(7)}/>
        <button value={tile[8]} onClick={handleClick(8)}/>
    </div>
    </>
    )}


//Game: constructor for board function
const Game = () => {
    //history: array with length=9 recording movements, init at null
    //current: number of movement translated to index, init at 0
    //currentTile: tile being played at the moment
    //xWeapon: X will have the first movement
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [current, setCurrent] = useState(0)
    const currentTile = history[current];
    const xWeapon = current%2===0; 

    //handlePlay: takes new move, adds to game history, refreses movement amount
    function handlePlay(nextTile) {
        const nextHistory =[...history.slice(0,current+1), nextTile];
        setHistory(nextHistory);
        setCurrent(nextHistory.length-1)
    }

    return (<div>
    <Board nextWeapon={xWeapon} tile={currentTile} onPlay={handlePlay}/>
    </div>)

}

export default Game;