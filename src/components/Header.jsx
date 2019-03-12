import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';

function Header(props){
  let privileges = '';
  if(props.adminStatus){privileges='Admin';}
  return (
    <div>
    <Navbar brand={privileges} right>
      <li><NavLink to='/'><Icon>view_module</Icon></NavLink></li>
      <li><NavLink to='/new'><Icon>archive</Icon></NavLink></li>
      <NavItem onClick={()=>props.handleToggleAdmin()}>Admin</NavItem>
    </Navbar>

    </div>
  );
}

export default Header;
