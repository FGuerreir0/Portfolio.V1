import React, { Component } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

export default class Links extends Component {
  render() {
    return (
      <div className='Links_Style'>
        <NavLink activeClassName='link_active' className='link_no_active' exact to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='link_active' className='link_no_active' exact to='/about'>
          About
        </NavLink>
        <NavLink activeClassName='link_active' className='link_no_active' exact to='/portfolio'>
          Portfolio
        </NavLink>
        <NavLink activeClassName='link_active' className='link_no_active' exact to='/contact'>
          Contact
        </NavLink>
      </div>
    );
  }
}
