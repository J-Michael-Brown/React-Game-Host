import React from 'react';
import GameList from '../assets/game-list';
import GameInfoList from '../assets/game-info-list';
import Game from '../games/tic-tac-toe/components/Game';
import {v4} from 'uuid';

function PlayGame({match}){
  const gameComponent = GameList[match.params.gameId];
  const gameInfo = GameInfoList[match.params.gameId];
  const game = Object.assign({},gameComponent,gameInfo);
  return(
    <div>
      <p>gameId = {match.params.gameId}</p>
      <p>Developed by: <span>{game.developerName}</span>, Produced by<span>{game.producer}</span></p>
      <h5>Categories:</h5>
      <ul>
        {game.categories.map((category)=> {
          return(
            <li key={v4()}>{category}</li>
          )
        })}
      </ul>
      <h5>Tags:</h5>
      <ul>
        {game.tags.map((tag)=> {
          return(
            <li key={v4()}>{tag}</li>
          )
        })}
      </ul>
      {game.component}
    </div>
  )
}

export default PlayGame;
