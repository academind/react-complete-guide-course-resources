import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, cellIndex) {
    setActivePlayer((prevActivePlayer) => prevActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, cell: cellIndex }, player: currentPlayer },
        ...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="h ighlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="PLayer 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
