import React from 'react';
import {Row, Input, Button} from 'react-materialize';

class NewContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      _contentName: null,
      _devs: null,
      _categories: null,
      _tags: null,
      _id: null,
      _src: null
    };
    this.handleNewContentFormSubmission = this.handleNewContentFormSubmission.bind(this);
  }


  handleNewContentFormSubmission({ _contentName, event }){
    event.preventDefault();
    console.log(_contentName.state.value);
  }

  render(){
    let _contentName = null;
    return(
      <div>
      <form onSubmit={(event)=>{this.handleNewContentFormSubmission({event: event, _contentName: _contentName})}}>
        <Row>
          <Input s={12} label="Content Name" ref={(input) => {_contentName = input;}} />
        </Row>
        <Button waves='light'>Submit</Button>
      </form>
      </div>
    )
  }
}

export default NewContent;
