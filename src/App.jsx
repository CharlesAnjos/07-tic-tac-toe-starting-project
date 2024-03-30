import { useState } from 'react';

import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [isEditable, setIsEditable] = useState(true);

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setIsEditable(false);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} isEditable={isEditable}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} isEditable={isEditable}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  )
}

export default App
