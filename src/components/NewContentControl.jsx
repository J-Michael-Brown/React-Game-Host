import React from 'react';
import NewContent from './NewContent';

function NewContentControl({adminPrivilege}){
  if(adminPrivilege){
    return(
      <div>
        <NewContent />
      </div>
    )
  } else {
    return(
      <div>
        You do not have admin privileges.
      </div>
    )
  }

}

export default NewContentControl;
