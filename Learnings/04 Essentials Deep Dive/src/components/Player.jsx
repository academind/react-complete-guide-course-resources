import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);


    function handleEditing() {
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange() {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = isEditing ? <input type="text" placeholder="playerName"  value={playerName} required onChange={handleChange} />  : <span className="player-name">{playerName}</span>
    let btnCaption = isEditing ? 'Save' : 'Edit';

    return (
        
        <li className={isActive ? 'active' : ''} >
            <span className="player"> 
                {editablePlayerName} 
                <span className="Player-sembol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{btnCaption}</button>
        </li>
    )
}