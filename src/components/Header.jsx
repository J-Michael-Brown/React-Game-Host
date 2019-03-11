import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <div>
      <h1>Title Spot</h1>
      <button onClick={()=>props.handleToggleAdmin()}>Admin</button> <Link to='/'>Home</Link> | <Link to='/new'>Submit New [Content]</Link>
    </div>
  );
}

export default Header;
