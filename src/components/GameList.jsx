import React from 'react';
import GameInfoList from '../assets/game-info-list';
import GameListGameDisplay from './GameListGameDisplay';

function GameList(){

  return(
    <div>
      {Object.keys(GameInfoList).map((GameInfoId) => {
        let gameInfo = GameInfoList[GameInfoId];
        return(
          <GameListGameDisplay
            name={gameInfo.name}/>
        )
      })}
    </div>
  )
}

export default GameList;
