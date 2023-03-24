//Win: checks if selected tiles cover a whole row, column or diagonal
function Win(grid) {
    //combs: every 3 index combination: rows, columns, diagonal
    //each combination has 3 indexes: array of arrays
    //if grid has a row/column/diagonal finished: return grid element
    //null when there's no complete row/column/diagonal
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
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    return null;
  }

export default Win;