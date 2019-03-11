import React from 'react';
import ContentList from '../assets/content-list';
import ContentInfoList from '../assets/content-info-list';
import Content from './Content';
import {v4} from 'uuid';

function PlayContent({match}){
  const contentComponent = ContentList[match.params.contentId];
  const contentInfo = ContentInfoList[match.params.contentId];
  const content = Object.assign({},contentComponent,contentInfo);
  return(
    <div>
      <p>contentId = {match.params.contentId}</p>
      <p>Developed by: <span>{content.developerName}</span>, Produced by<span>{content.producer}</span></p>
      <h5>Categories:</h5>
      <ul>
        {content.categories.map((category)=> {
          return(
            <li key={v4()}>{category}</li>
          )
        })}
      </ul>
      <h5>Tags:</h5>
      <ul>
        {content.tags.map((tag)=> {
          return(
            <li key={v4()}>{tag}</li>
          )
        })}
      </ul>
      <Content src={content.src}/>
    </div>
  )
}

export default PlayContent;
