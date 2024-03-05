const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    gameBoard[turn.square.row][turn.square.cell] = turn.player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) =>
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) =>
              <li key={cellIndex}>
                <button onClick={() => onSelectSquare(rowIndex, cellIndex)}>{playerSymbol}</button>
              </li>
            )}
          </ol>
        </li>
      )}
    </ol>
  );
}