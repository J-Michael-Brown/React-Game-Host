import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import ContentInfoList from '../assets/content-info-list.js';
import ContentList from './ContentList';
import ContentDisplay from './ContentDisplay';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {contentInfoList: ContentInfoList};
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><ContentList
            contentInfoList={this.state.contentInfoList}/>}/>
          <Route path='/view/:contentId' component={ContentDisplay}/>
        </Switch>
      </div>
    );
  }
}

export default App;
