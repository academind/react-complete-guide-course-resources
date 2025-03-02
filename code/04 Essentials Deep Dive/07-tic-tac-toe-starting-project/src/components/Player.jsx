import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEdit() {
    setIsEditing((editing) => !editing);
    if (!isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameControl = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerNameControl = (
      <input type="text" value={playerName} onChange={handleChange}></input>
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameControl}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{btnCaption}</button>
    </li>
  );
}
