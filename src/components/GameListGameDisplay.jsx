import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function GameListGameDisplay(props){
  return(
    <div>
      <Link to={`/play/${props.gameId}`}>{props.name}</Link>
    </div>
  )
}

GameListGameDisplay.propTypes = {
  gameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default GameListGameDisplay;
