import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
    const [editing, setEditing] = useState(false)
    const [pname, setPname] = useState(initialName)
    function handleEditClick(){
        setEditing((edit) => !edit)
    }
    function handleCHange(event){
        setPname(event.target.value)
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editing ? (<input type="text" required value={pname} onChange={handleCHange}/>) : (<span className="player-name">{pname}</span>)}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{editing ? 'Save' : 'Edit'}</button>
        </li>
    );
}