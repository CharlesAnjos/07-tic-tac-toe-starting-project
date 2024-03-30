import { useState } from 'react';

import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from './components/Log';

function deriveCurrentPlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveCurrentPlayer(gameTurns)
  const [isEditable, setIsEditable] = useState(true);

  function handleSelectSquare(rowIndex, colIndex) {
    setIsEditable(false);
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveCurrentPlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer
        }, ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={currentPlayer === 'X'} isEditable={isEditable} />
          <Player initialName="Player 2" symbol="O" isActive={currentPlayer === 'O'} isEditable={isEditable} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
