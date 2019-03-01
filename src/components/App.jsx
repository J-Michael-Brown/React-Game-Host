/* eslint-disable */
import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import GameInfo from '../assets/portfolio.js';
/* eslint-enable */

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {portfolio: GameInfo};
  }

  render(){
    return (
      <div>
        <Header/>
        <switch>
          <Route exact path='/' render={()=><GameList gameList={this.state.gameList}/>}/>
        </switch>
      </div>

    );
  }
}

export default App;
