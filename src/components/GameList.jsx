import React from 'react';
import GameInfoList from '../assets/game-info-list';
import GameListGameDisplay from './GameListGameDisplay';
import {v4} from 'uuid';

function GameList(){

  return(
    <div>
      {Object.keys(GameInfoList).map((GameInfoId) => {
        let gameInfo = GameInfoList[GameInfoId];
        return(
          <GameListGameDisplay
            name={gameInfo.name}
            key={v4()}/>
        )
      })}
    </div>
  )
}

export default GameList;
