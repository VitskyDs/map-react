import React, { Component } from 'react';
import Map from './Map.js'
import './App.css';

class App extends Component {
  state = {
    locations: [{
        name: 'Mahane Yehuda',
        id: '',
        lat: 31.785556,
        lng: 35.2100333
      },
      {
        name: 'Blumfield Garden',
        id: '',
        lat: 31.772415,
        lng: 35.2211988
      },
      {
        name: 'Western Wall',
        id: '',
        lat: 31.7767189,
        lng: 35.2323198
      },
      {
        name: 'Church of the Holy Sepulchre',
        id: '',
        lat: 31.7784813,
        lng: 35.2274115
      },
      {
        name: 'Zion Square',
        id: '',
        lat: 31.7819264,
        lng: 35.2174048
      },
      {
        name: 'Temple Mount',
        id: '',
        lat: 31.7786754,
        lng: 35.2306103}
      ],
      selectValue: ''
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" id="menu-button"></button>
          <h1 className="App-title">JLM Hotspots</h1>
        </header>
        <Map locations={this.state.locations}/>
        <div id="sidebar">
          <div className="search">
            <select
                type="text"
                placeholder="Select category"
                value=''
                onChange=''>
                <option value="secular">Secular</option>
                <option value="religious">Religious</option>
                <option value="hangout">Hangout</option>
              </select>
          </div>
          <div className="results">
            <ol>
              <li>Mahane Yehuda</li>
              <li>Blumfield Garden</li>
              <li>Western Wall</li>
              <li>Church of the Holy Sepulchre</li>
              <li>Zion Square</li>
              <li>Temple Mount</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
