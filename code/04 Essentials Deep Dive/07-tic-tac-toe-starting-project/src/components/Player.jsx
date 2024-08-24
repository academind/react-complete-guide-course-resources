import React from 'react';
import { useState } from 'react';
const Player = ({ initialName, symbol }) => {

    const [playerName, setPlayerName] = useState(initialName);
    const [playerSymbol, setPlayerSymbol] = useState(symbol);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    // Remove the declaration of the variable playerName

    return (
        <div>
            <li>
                {isEditing ? (<input className="playe-input" type="text" required value={playerName} onChange={handleChange} />) : (<span className="player-name">{playerName}</span>)}
                <span className="player-symbol">{symbol}</span>
                <button onClick={() => setIsEditing((editing) => !editing)}>{isEditing ? ("Save") : ("Edit")}</button>
            </li>
        </div >
    );
};

export default Player;