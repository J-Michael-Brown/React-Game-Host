import React from 'react';
import GameList from '../assets/game-list';
import GameInfoList from '../assets/game-info-list';

function PlayGame({match}){
  const gameComponent = GameList[match.params.gameId];
  const gameInfo = GameInfoList[match.params.gameId];
  const game = Object.assign({},gameComponent,gameInfo);
  console.log(game);
  return(
    <div>
      <p>gameId = {match.params.gameId}</p>
      {game.component}
    </div>
  )
}

export default PlayGame;
