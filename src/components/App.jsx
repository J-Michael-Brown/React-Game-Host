import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import ContentInfoList from '../assets/content-info-list.js';
import ContentList from './ContentList';
import ContentDisplay from './ContentDisplay';
import NewContentControl from './NewContentControl';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contentInfoList: ContentInfoList,
      admin: false
    };
    this.toggleAdmin = this.toggleAdmin.bind(this);
  }

  toggleAdmin(){
    const adminPrivilege = !this.state.admin;
    const newState = {...this.state, admin: adminPrivilege};
    this.setState(newState);
  }

  render(){
    let adminStatus = '';
    if(this.state.admin){adminStatus = 'Admin';}
    return (
      <div>
        <Header handleToggleAdmin={this.toggleAdmin}/>
        {adminStatus}
        <Switch>
          <Route exact path='/' render={()=><ContentList
            contentInfoList={this.state.contentInfoList}/>}/>
          <Route path='/view/:contentId' component={ContentDisplay}/>
          <Route exact path='/new' render={() => <NewContentControl adminPrivilege={this.state.admin}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
