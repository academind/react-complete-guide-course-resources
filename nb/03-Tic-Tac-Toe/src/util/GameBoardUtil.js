function gameBoardUtil(gameBoard) {
  // Check rows
  for (let row of gameBoard) {
    if (row.every((cell) => cell === row[0]) && row[0] !== null) {
      return row[0];
    }
  }

  // Check columns
  for (let col = 0; col < gameBoard[0].length; col++) {
    const column = gameBoard.map((row) => row[col]);
    if (column.every((cell) => cell === column[0]) && column[0] !== null) {
      return column[0];
    }
  }

  // Check diagonals
  // Check top-left to bottom-right diagonal
  if (
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2] &&
    gameBoard[0][0] !== null
  ) {
    return gameBoard[0][0];
  }

  // Check top-right to bottom-left diagonal
  if (
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][0] &&
    gameBoard[0][2] !== null
  ) {
    return gameBoard[0][2];
  }

  return null; // No winner found
}

function isDraw(gameBoard) {
  let isAllFinished = true;
  for (let row of gameBoard) {
    if (row.every((cell) => cell !== null)) {
      isAllFinished &= true;
    } else return null;
  }
  return isAllFinished;
}

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

/**
 *
 * @param gameTurn
 * @returns {*[][]}
 */
function derivedGameBoard(gameTurn) {
  const gameBoard = [...initGameBoard.map((c) => [...c])]; //deep copy

  for (const turn of gameTurn) {
    const { row, column } = turn.square;
    gameBoard[row][column] = turn.symbol;
  }
  return gameBoard;
}

/**
 *
 * @returns {number}
 * @constructor
 */

function derivedCurrentPlayer(gameTurn) {
  let curr = 0;
  if (gameTurn.length > 0 && gameTurn[0].player === 0) curr = 1;
  return curr;
}

const playerSymbol = ["X", "O"];
export { gameBoardUtil, playerSymbol, derivedGameBoard, derivedCurrentPlayer };
