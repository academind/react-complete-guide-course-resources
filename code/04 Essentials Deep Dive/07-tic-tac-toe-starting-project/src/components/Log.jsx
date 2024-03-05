export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          {`${turn.player} selected square ${turn.square.row}, ${turn.square.cell}`}
        </li>
      ))}
    </ol>
  );
}