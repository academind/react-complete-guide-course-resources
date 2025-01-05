import { Player } from "./component/Player.jsx";
import React, { useState } from "react";
import { GameBoard } from "./component/GameBoard.jsx";
import { Log } from "./component/Log.jsx";
import {
  derivedCurrentPlayer,
  derivedGameBoard,
  gameBoardUtil,
  playerSymbol,
} from "./util/GameBoardUtil.js";
import { GameOver } from "./component/GameOver.jsx";

function App() {
  const [player1, setPlayer1] = useState("player 1");
  const [player2, setPlayer2] = useState("player 2");
  // const [currentPlayer, setCurrentPlayer] = useState(0);

  // const [gameBoard, setGameBoard] = React.useState(initGameBoard);
  const [gameTurn, setGameTurn] = React.useState([]);

  let currentPlayer = derivedCurrentPlayer(gameTurn);
  let winPlayer;
  const gameBoard = derivedGameBoard(gameTurn);
  const winner = gameBoardUtil(gameBoard); //get winner symbol
  const hasDraw = gameTurn.length === 9 && !winner;
  if (winner) {
    console.log("winner", winner);
    //get winner name
    winPlayer =
      playerSymbol.findIndex((p) => p === winner.toUpperCase()).valueOf() === 0
        ? player1
        : player2;
  } else if (hasDraw) {
    console.log("draw", hasDraw);
  }

  function handleGameBoardChange(row, col) {
    // setGameBoard((prevState) => {
    //   if (prevState[row][col] !== null) {
    //     return prevState;
    //   }
    //   let newGameBoard = [...prevState.map((inner) => [...inner])];
    //   newGameBoard[row][col] = playerSymbol[currentPlayer];
    //   updateNextPlayingPlayer();
    //   return newGameBoard;
    // });
    setGameTurn((prevState) => {
      let curr = derivedCurrentPlayer(prevState);
      // if (prevState.length > 0 && prevState[0].player === 0) curr = 1;
      if (
        prevState.filter((p) => p.square.row === row && p.square.column === col)
          .length > 0
      ) {
        return prevState;
      }
      const newTurn = [
        {
          player: curr,
          square: {
            row: row,
            column: col,
          },
          symbol: playerSymbol[curr],
          playerName: currentPlayer === 0 ? player1 : player2,
        },
        ...prevState,
      ];
      // updateNextPlayingPlayer();
      return newTurn;
    });
  }

  function rematch() {
    setGameTurn([]);
  }

  // function updateNextPlayingPlayer() {
  //   setCurrentPlayer((c) => (c === 0 ? 1 : 0));
  // }

  function setPlayer(player) {}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName={player1}
            setPlayerName={setPlayer1}
            isPlaying={currentPlayer === 0}
            symbol={playerSymbol[0]}
          ></Player>
          <Player
            playerName={player2}
            setPlayerName={setPlayer2}
            isPlaying={currentPlayer === 1}
            symbol={playerSymbol[1]}
          ></Player>
        </ol>
        <div id="game-board">
          <GameBoard
            // currentPlayer={currentPlayer}
            // playerSymbol={playerSymbol[currentPlayer]}
            handleGameBoardChange={handleGameBoardChange}
            gameBoard={gameBoard}
            // turns={gameTurn}
          />
        </div>
        {(winner || hasDraw) && (
          <GameOver
            winner={winPlayer}
            draw={hasDraw}
            rematchHandler={rematch}
          />
        )}
      </div>

      <Log logs={gameTurn} />
    </main>
  );
}

export default App;
