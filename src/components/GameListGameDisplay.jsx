import React from 'react';
import {Link} from 'react-router-dom';

function GameListGameDisplay(props){
  return(
    <div>
      <Link to={`/play/${props.gameId}`}>{props.name}</Link>
    </div>
  )
}

export default GameListGameDisplay;
