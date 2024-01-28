import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {

const [ gameBoard, setGameboard ] = useState(initialGameBoard);

function handleSquareSelection(rowIndex, colIndex) {
    setGameboard((prevGameBoard) => {
        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        updatedBoard[rowIndex][colIndex] = "X";
        return updatedBoard;
    });
}
  return <ol id="game-board">''
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,colIndex) => <li key={colIndex}><button onClick={() => handleSquareSelection(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
        </ol>
        </li>)}
  </ol>;
}
