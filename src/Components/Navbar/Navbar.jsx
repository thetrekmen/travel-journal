import React from 'react';
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <img className="navbar--logo" src={props.backgroundImg} alt="" />
      <h3 className="navbar--title" >{props.navbarTitle}</h3>
    </div>
  )
}
