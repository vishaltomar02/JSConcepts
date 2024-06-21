import { useEffect, useState } from "react";

function getInitialTiles(tiles) {
  // same number of rows and columns will be there
  return Array.from({ length: tiles }, () => {
    return Array.from({ length: tiles }, () => -1)
  });
}

const TicTacToe = ({
  tilesLength
}) => {
  const [tiles, setTiles] = useState(getInitialTiles(tilesLength));
  const [isXTurn, setIsXTurn] = useState(true);
  const [someoneWon, setSomeoneWon] = useState(null);

  useEffect(() => {
    if(someoneWon) {
      setTimeout(() => {
        setSomeoneWon(null);
        resetGame();
      }, 2000);
    }
  }, [someoneWon])

  const resetGame = () => {
    setTiles(getInitialTiles(tilesLength));
    setIsXTurn(true);
  }

  const checkIfSomeoneWon = (currTiles, rowIdx, colIdx) => {
    // a user can win if they have their value in every tile of that row or column clicked or if daigonally
    // First check if every tile of the row at clicked tile is same as that user's
    const currVal = isXTurn ? "X" : "0";
    const wonByRow = currTiles[rowIdx].every((tile) => tile === currVal);
    const wonByCol = currTiles.map((row) => row.filter((col, idx) => idx === colIdx)[0]).every(
      (tile) => tile === currVal);
    // check if diagonal tiles are all same
    let leftToRightDiagonalSame = false;
    if(rowIdx === colIdx) {
      leftToRightDiagonalSame = true;
      for(let i = 0; i < tilesLength; i++) {
        if(currTiles[i][i] !== currVal) {
          leftToRightDiagonalSame = false;
          break;
        }
      }
    }
    let rightToLeftDiagonalSame = true;
    for(let i = 0; i < tilesLength; i++) {
      if(currTiles[i][tilesLength-(i+1)] !== currVal) {
        rightToLeftDiagonalSame = false;
      }
    }
    if(wonByCol || wonByRow || leftToRightDiagonalSame || rightToLeftDiagonalSame) {
      setSomeoneWon(currVal);
    }
  }

  function handleTileClick(row, col) {
    if(tiles[row][col] !== -1 || someoneWon) return;
    const copyOfCurrTiles = tiles.map((rowTiles) => rowTiles.map((colTile) => colTile));
    copyOfCurrTiles[row][col] = isXTurn ? "X" : "0";
    checkIfSomeoneWon(copyOfCurrTiles, row, col);
    setTiles(copyOfCurrTiles);
    setIsXTurn((prev) => !prev)
  }

  function renderTiles() {
    return tiles.map((row, rowIdx) => {
      return <div className="tiles-row" key={rowIdx}>
        {
          row.map((col, colIdx) => {
            return <span
              className="tile" key={rowIdx + colIdx}
              onClick={() => handleTileClick(rowIdx, colIdx)}
            >
              {col != -1 ? col : null}
            </span>
          })
        }
      </div>
    });
  }

  return (
    <section className="tic-tac-toe-container">
      {
        renderTiles()
      }
      { someoneWon && 
        <div className="won-container">
          {someoneWon} Won!! Congratulations!
        </div>
      }
    </section>
  )
}

export default TicTacToe