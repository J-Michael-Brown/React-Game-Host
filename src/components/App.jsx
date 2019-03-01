import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import GameInfoList from '../assets/game-info-list.js';
import GameList from './GameList'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {portfolio: GameInfoList};
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><GameList/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
