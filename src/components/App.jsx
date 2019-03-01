import React from 'react';
import Header from './Header';
/*eslint-disable */
import { Switch, Route } from 'react-router-dom';
/*eslint-enable */
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
        <switch>
          <Route exact path='/' render={()=><GameList/>}/>
        </switch>
      </div>

    );
  }
}

export default App;
