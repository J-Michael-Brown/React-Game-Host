import React from 'react';
import {Row, Input, Button} from 'react-materialize';

class NewContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.handleNewContentFormSubmission = this.handleNewContentFormSubmission.bind(this);
  }


  handleNewContentFormSubmission({ event, _contentName, _src }){
    event.preventDefault();
    console.log('_contentName', _contentName.state.value);
    console.log('_src', _src.state.value);
  }

  render(){
    let _contentName = null;
    let _src = null;
    return(
      <div>
      <form onSubmit={(event)=>{this.handleNewContentFormSubmission({event: event, _contentName: _contentName, _src: _src})}}>
        <Row>
          <Input s={12} label="Content Name" ref={(input) => {_contentName = input;}} />
          <Input s={12} label="Source" placeholder='https://www.epicodus.com/' ref={(input) => {_src = input;}} />
        </Row>
        <Button waves='light'>Submit</Button>
      </form>
      </div>
    )
  }
}

export default NewContent;
