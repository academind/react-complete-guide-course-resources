import React from "react";

/**
 *
 * @param player
 * @param symbol
 * @returns {Element}
 * @constructor
 */
export function Player({ playerName, setPlayerName, symbol, isPlaying }) {
  // const [playerName, setPlayerName] = React.useState(player);
  const [tempPlayer, setTempPlayer] = React.useState(playerName);
  const [edit, setEdit] = React.useState(false);

  /**
   *
   * @param value
   */
  function checkNameIsValid(input) {
    if (input.trim() === "") {
      console.error("name required");
      alert("Name is Required");
      return false;
    } else {
      return true;
    }
  }

  /**
   *
   * @param event
   */
  const handleChange = (event) => {
    // if (!checkNameIsValid(event.target.value)) return;
    setTempPlayer(event.target.value);
    // event.stopPropagation();
  };

  /**
   * handles blurred
   */
  function savePlayerName() {
    if (!edit) return;
    if (!checkNameIsValid(tempPlayer)) return;
    setPlayerName(tempPlayer);
    setEdit(false);
  }

  /**
   *
   * @returns {Element}
   */
  let playerNameField = () => {
    if (!edit) {
      return <span className="player-name">{playerName}</span>;
    } else {
      return (
        <input
          type="text"
          value={tempPlayer}
          onChange={handleChange}
          autoFocus={edit}
          onBlur={() => {
            // to stop blur fire before save button click
            setTimeout(() => {
              savePlayerName();
            }, 100);
          }}
        />
      );
    }
  };

  let buttonComp = () => {
    if (!edit) {
      return (
        <button
          onClick={(e) => {
            setEdit(true);
            // e.preventDefault();
          }}
        >
          Edit
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            savePlayerName();
          }}
        >
          Save
        </button>
      );
    }
  };
  return (
    <li className={isPlaying ? "active" : undefined}>
      <span className="player">
        {playerNameField()}
        <span className="player-symbol">{symbol}</span>
        {buttonComp()}
      </span>
      {/*{children}*/}
    </li>
  );
}
