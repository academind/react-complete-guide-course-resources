import { Player } from "./component/Player.jsx";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player player="player 1" symbol="X"></Player>
          <Player player="Player 2" symbol="O"></Player>
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
