import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WinningCombination";
import WinnerWindow from "./components/WinnerWindow";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function App() {
  const [gameInfo, setGameInfo] = useState([]);

  let gameBoard = [...initialGameBoard.map(item=>[...item])]
  
  for(const each of gameInfo){
      const {row, col, player} = each
      gameBoard[row][col] = player
  } 
  
  
  let won=null;
  for(const each of WINNING_COMBINATIONS){
    const firstCell = gameBoard[each[0].row][each[0].column]
    const secondCell = gameBoard[each[1].row][each[1].column]
    const thirdCell = gameBoard[each[2].row][each[2].column]
    if(firstCell && secondCell && thirdCell){
      if(firstCell === secondCell && secondCell ===thirdCell){
        won = firstCell
      }
    }
  }
  const draw = (gameInfo.length == 9) && !won
  function restart(){
    setGameInfo([]);
    console.log('restarted')
  }
  let activePlayer = 'X'
  if(gameInfo.length>0 &&  gameInfo[0].player ==='X'){
    activePlayer = 'O'
  }
  function handleSelectSquare(rowIdx, colIdx) {
    setGameInfo((latest) =>{
      let activePlayer = 'X'
      if(latest.length>0 &&  latest[0].player ==='X'){
        activePlayer = 'O'
      }
      
      let upd = [{row: rowIdx,col: colIdx, player: activePlayer} ,...latest]
      return upd;
    })

    
    
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {(won || draw) && <WinnerWindow winner={won} restart={restart}/>}
  
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} curBoard={gameInfo} gameBoard={gameBoard}/>
      </div>
      <Log gameInfos={gameInfo} />
    </main>
  );
}

export default App
