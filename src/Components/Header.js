import React, {Component} from 'react';

function Header(props) {
  return (
    <header className="App-header">
      <button type="button" id="menu-button" onClick={props.handleToggleMenu}></button>
      <h1 className="App-title">JLM Hotspots</h1>
    </header>
  )
};

export default Header;
