export function Log({ logs }) {
  return (
    <ol id="log">
      {logs.map((log, i) => (
        <li key={`${log.square.row}-${log.square.column}`}>
          {log.playerName} selected row:{log.square.row} column:{" "}
          {log.square.column}
        </li>
      ))}
    </ol>
  );
}
