import {useState} from 'react';
export default function Player({initialName,symbol,isActive, onChangeName}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    function handleEditClick(){
            setIsEditing((editing)=>!editing);
            if(isEditing){
                onChangeName(symbol, playerName);
                }
    }
    function handleChange(event){
        setPlayerName(event.target.value)
    }
    let initialPlayerName = <span className="player-name">{playerName}</span>;
    if(isEditing){
        // take input, also use it as output is called two-way binding
        initialPlayerName = <input type = "text" required value = {playerName} onChange={handleChange}/>
    }
    return (
                <li className = {isActive ? 'active' : undefined} >
                    <span className="player-info">
                        {initialPlayerName}
                        <span className="player-symbol">{symbol}</span>
                    </span>
                    <button onClick = {handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
                </li>
        );
    };