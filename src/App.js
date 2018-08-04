import React, {Component} from 'react';
import Map from './Map-3.js'
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
        name: 'Western Wall Tunnel',
        id: '5714efd1498eb520fae237cb',
        lat: 31.772415,
        lng: 35.2211988,
        category: 'hangout'
      }, {
        name: 'Western Wall',
        id: '4b896c78f964a520ff3432e3',
        lat: 31.7767189,
        lng: 35.2323198,
        category: 'religious'
      }, {
        name: 'Church of the Holy Sepulchre',
        id: '4b599fc5f964a5207d8f28e3',
        lat: 31.7784813,
        lng: 35.2274115,
        category: 'religious'
      }, {
        name: 'Zion Square',
        id: '4b7325faf964a520569e2de3',
        lat: 31.7819264,
        lng: 35.2174048,
        category: 'hangout'
      }, {
        name: 'Temple Mount',
        id: '4fe5c6f2e4b051b5c1cd5c51',
        lat: 31.7786754,
        lng: 35.230610,
        category: 'religious'
      }
    ],
    defaultCenter: {
      lat: 31.7824533,
      lng: 35.1966413
    },
    modifiedCenter: {},
    defaultZoom: 14,
    modifiedZoom: 16,
    defaultMarkerIcon: 'http://maps.gstatic.com/mapfiles/markers2/boost-marker-mapview.png',
    modifiedMarkerIcon: 'http://maps.gstatic.com/mapfiles/markers2/boost-marker-mapview.png',
    showMarkerIndex: 0,
    selectedCategory: 'all',
    filteredLocations: [],
    chosenLocation: '',
    toggleMenu: false,
    showInfoIndex: -1
  }

  //sets filteredLocations to the initial state of all locations
  componentDidMount() {
    this.setState({filteredLocations: this.state.locations})
  }

  handleMarkerClick = (event, latlng, index) => {

    this.setState({
      showInfoIndex: index.index,
      modifiedMarkerIcon: {
        path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
        fillColor: 'yellow',
        fillOpacity: 0.8,
        scale: 0.1,
        strokeColor: 'gold',
        strokeWeight: 3
      }
    })

  }

  //show or hide menu
  handleToggleMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  handleLocationClick = (event, latlng, index) => {}

  handleFilter = (category) => {
    this.setState({selectedCategory: category})
    if (category === 'all') {
      this.setState({filteredLocations: this.state.locations})
    } else {
      this.setState({
        filteredLocations: this.state.locations.filter(location => location.category === category)
      })
    }
  }

  onItemClick = (location) => {
    this.setState({chosenLocation: location})
  }

  render() {

    return (<div className="App">
      <header className="App-header">
        <button type="button" id="menu-button"></button>
        <h1 className="App-title">JLM Hotspots</h1>
      </header>
      <Map locations={this.state.filteredLocations}
        onMarkerClick={this.handleMarkerClick} onHandleLocationSelected={this.handleLocationSelected} showInfoIndex={this.state.showInfoIndex} markerIcon={this.state.markerIcon}/>
      <div id="sidebar">
        <div className="search">
          <select type="text" placeholder="Select category" value={this.state.selectedCategory} onChange={(event) => this.handleFilter(event.target.value)}>
            <option value="all">All Locations</option>
            <option value="secular">Secular</option>
            <option value="religious">Religious</option>
            <option value="hangout">Hangout</option>
          </select>
        </div>
        <div className="results">
          <LocationList locations={this.state.filteredLocations} onItemClick={this.onItemClick}/>
        </div>
      </div>
      <Foursquare venue_id={this.state.chosenLocation}/>
    </div>);
  }
}

export default App;
