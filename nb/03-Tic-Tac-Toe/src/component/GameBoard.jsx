import { TicButton } from "./TicButton.jsx";
import React from "react";

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard({
  // currentPlayer,
  // playerSymbol,
  handleGameBoardChange,
  // gameBoard,
  turns,
}) {
  // const [gameBoard, setGameBoard] = React.useState(initGameBoard);
  //
  //
  //
  // function isPlayerWon(arr) {
  //   let isPlayerWon = false;
  //   console.log(checkWinner(arr));
  // }
  //
  // function handleGameBoardChange(row, col) {
  //   setGameBoard((prevState) => {
  //     let newGameBoard = [...prevState.map((inner) => [...inner])];
  //     newGameBoard[row][col] = playerSymbol;
  //     console.log(checkWinner(newGameBoard));
  //     return newGameBoard;
  //   });
  //   nextPlayerfn();
  // }

  const gameBoard = initGameBoard;

  for (const turn of turns) {
    const { row, column } = turn.square;
    gameBoard[row][column] = turn.symbol;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((col, k) => (
              <li key={k}>
                <TicButton onClick={() => handleGameBoardChange(i, k)}>
                  {col}
                </TicButton>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
