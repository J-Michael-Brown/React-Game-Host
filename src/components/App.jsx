import React from 'react';
import Header from './Header';
import { Switch, Route, withRouter } from 'react-router-dom';
import ContentInfoListController from './ContentInfoListController';
import ContentDisplay from './ContentDisplay';
import NewContentControl from './NewContentControl';
import {connect} from 'react-redux';
import types from '../actions/index.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      admin: false
    };
    this.toggleAdmin = this.toggleAdmin.bind(this);
    this.handleGetState = this.handleGetState.bind(this);
  }

  componentDidMount(){
    this.handleGetState();
  }

  handleGetState(){
    const {dispatch} = this.props;
    const action = types.GET_CONTENT_LIST();
    return dispatch(action);
  }

  toggleAdmin(){
    const adminPrivilege = !this.state.admin;
    const newState = {...this.state, admin: adminPrivilege};
    this.setState(newState);
  }

  render(){
    return (
      <div>
        <Header handleToggleAdmin={this.toggleAdmin} adminStatus={this.state.admin}/>
        <Switch>
          <Route exact path='/' render={() => <ContentInfoListController contentInfoList={this.props.contentInfoList}/>}/>
          <Route exact path='/view/:contentId' component={ContentDisplay}/>
          <Route exact path='/new' render={() => <NewContentControl adminPrivilege={this.state.admin}/>}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contentInfoList: state.contentInfoList
  }
}

export default withRouter(connect(mapStateToProps)(App));
