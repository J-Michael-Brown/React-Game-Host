import React from 'react';

function PlayGame({match}){
  console.log(match);
  return(
    <div>
      gameId = {match.params.gameId}
    </div>
  )
}

export default PlayGame;
