import React from 'react'
import ContentList from './ContentList';
import {Preloader} from 'react-materialize';

function ContentInfoListController(props) {
  if(props.contentInfoList){
    return(
      <div>
        <ContentList contentInfoList={props.contentInfoList}/>
      </div>
    );
  }else{
    return(
      <div>
        <Preloader size='big' flashing/>
      </div>
    );
  }
}

export default ContentInfoListController;
