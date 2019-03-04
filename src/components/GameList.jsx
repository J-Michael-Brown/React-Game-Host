import React from 'react';
import GameInfoList from '../assets/game-info-list';
import GameListGameDisplay from './GameListGameDisplay';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function GameList(props){

  return(
    <div>
      {Object.keys(GameInfoList).map((GameInfoId) => {
        let gameInfo = GameInfoList[GameInfoId];
        return(
          <GameListGameDisplay
            name={gameInfo.name}
            gameId={gameInfo.id}
            key={v4()}/>
        )
      })}
    </div>
  )
}

GameList.propTypes = {
  gameInfoList: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    developerName: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default GameList;
