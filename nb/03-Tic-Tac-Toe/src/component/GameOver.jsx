export function GameOver({ winner, draw, rematchHandler: rematchHandler }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner.toUpperCase()} Won!</p>}
      {draw && <p>Draw!!</p>}
      <button onClick={rematchHandler}>Rematch</button>
    </div>
  );
}
