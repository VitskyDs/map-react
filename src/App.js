import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" id="menu-button"></button>
          <h1 className="App-title">JLM Hotspots</h1>
        </header>
        <div id="map"></div>
        <div id="sidebar">
          <div className="search">
            <input
                type="text"
                placeholder="Filter by name"
                value=''
                onChange=''/>
          </div>
          <div className="results">
            <ol>
              <li>Mahane Yehuda</li>
              <li>Blumfield Garden</li>
              <li>Western Wall</li>
              <li>Church of the Holy Sepulchre</li>
              <li>Zion Square</li>
              <li>HaRav Shlomo Asaf Square</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
