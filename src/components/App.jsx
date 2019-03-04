import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import GameInfoList from '../assets/game-info-list.js';
import GameList from './GameList';
import PlayGame from './PlayGame';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {gameInfoList: GameInfoList};
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><GameList
            gameInfoList={this.state.gameInfoList}/>}/>
          <Route path='/play/:gameId' component={PlayGame}/>
        </Switch>
      </div>
    );
  }
}

export default App;
