import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButton() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let button = <button onClick={handleEditButton}>Edit</button>;
  if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    button = <button onClick={handleEditButton}>Save</button>
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {button}
    </li>
  )
}