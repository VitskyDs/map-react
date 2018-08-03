import React, {Component} from 'react';
import Map from './Map-2.js'
import LocationList from './Locations.js'
import Foursquare from './Foursquare.js'
import './App.css';

class App extends Component {
  state = {
    locations: [
      {
        name: 'Mahane Yehuda',
        id: '4b7e63c5f964a5202aeb2fe3',
        lat: 31.785556,
        lng: 35.2100333,
        category: 'secular'
      }, {
        name: 'Blumfield Garden',
        id: '2',
        lat: 31.772415,
        lng: 35.2211988,
        category: 'hangout'
      }, {
        name: 'Western Wall',
        id: '3',
        lat: 31.7767189,
        lng: 35.2323198,
        category: 'religious'
      }, {
        name: 'Church of the Holy Sepulchre',
        id: '4',
        lat: 31.7784813,
        lng: 35.2274115,
        category: 'religious'
      }, {
        name: 'Zion Square',
        id: '5',
        lat: 31.7819264,
        lng: 35.2174048,
        category: 'hangout'
      }, {
        name: 'Temple Mount',
        id: '6',
        lat: 31.7786754,
        lng: 35.230610,
        category: 'religious'
      }
    ],
    selectedCategory: 'all',
    filteredLocations: [],
    chosenLocation: ''
  }

  filterCategory = (category) => {
    this.setState({selectedCategory : category})
    if (category === 'all') {
      this.setState({filteredLocations: this.state.locations})
    } else {
      this.setState({filteredLocations: this.state.locations.filter(location => location.category === category)})}
  }

  componentDidMount(){
    this.setState({filteredLocations: this.state.locations})
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <button type="button" id="menu-button"></button>
          <h1 className="App-title">JLM Hotspots</h1>
        </header>
        <Map locations={this.state.filteredLocations} />
        <div id="sidebar">
          <div className="search">
            <select type="text" placeholder="Select category" value={this.state.selectedCategory} onChange={(event) => this.filterCategory(event.target.value)}>
              <option value="all">All Locations</option>
              <option value="secular">Secular</option>
              <option value="religious">Religious</option>
              <option value="hangout">Hangout</option>
            </select>
          </div>
          <div className="results">
            <LocationList locations={this.state.filteredLocations} />
          </div>
        </div>
        <Foursquare locations={this.state.chosenLocation} />
      </div>);
  }
}

export default App;
