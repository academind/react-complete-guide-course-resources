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
  gameBoard,
  // turns,
}) {
  // const [gameBoard, setGameBoard] = React.useState(initGameBoard);
  //
  //
  //
  // function isPlayerWon(arr) {
  //   let isPlayerWon = false;
  //   console.log(gameBoardUtil(arr));
  // }
  //
  // function handleGameBoardChange(row, col) {
  //   setGameBoard((prevState) => {
  //     let newGameBoard = [...prevState.map((inner) => [...inner])];
  //     newGameBoard[row][col] = playerSymbol;
  //     console.log(gameBoardUtil(newGameBoard));
  //     return newGameBoard;
  //   });
  //   nextPlayerfn();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((col, k) => (
              <li key={k}>
                <TicButton
                  isDisabled={col !== null}
                  onClick={() => handleGameBoardChange(i, k)}
                >
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
