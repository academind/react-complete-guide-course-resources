import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from 'react'
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from "./components/GameOver"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X'
  if (gameTurns && gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col]=player
      console.log(gameBoard[row][col])
  }

  let winner = null;
  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column]
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]
    if (firstSquareSymbol &&
       firstSquareSymbol === secondSquareSymbol && 
       secondSquareSymbol === thirdSquareSymbol) {
        winner = firstSquareSymbol;
    }

  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    //setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X')
    console.log("active player :", activePlayer);
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      console.log("currentPlayer :", currentPlayer)
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, 
        ...prevTurns]

        console.log("updatedTurns :", updatedTurns)

        return updatedTurns
    });
  }
  

  const handleRestart = () =>{
    setGameTurns([])
  }
  return <main>
    <div id = "game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
        <Player initialName="Player 2" symbol="O"  isActive={activePlayer === 'O'}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
      <GameBoard onSelectSquare={handleSelectSquare} 
        board={gameBoard}/>
     
    </div>

    <Log turns={gameTurns}/>

  </main>
}

export default App
