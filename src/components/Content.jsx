import React from 'react';

function Content(props){
  return(
    <div>
      {props.src}
    </div>
  )
}
// <iframe src={props.src} title='Content View' height="780" width="1100"></iframe>

export default Content;
