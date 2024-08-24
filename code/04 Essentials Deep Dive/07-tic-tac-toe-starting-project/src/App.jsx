import Player from "./components/player"
import GameBoard from "./components/GameBoard"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="O" />
          <Player initialName="Player2" symbol="X" />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
