export default function GameOver({ winner, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner ? `${winner} wins!` : 'It\'s a draw!'}</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onReset}>Play again</button>
      </p>
    </div>
  );
}