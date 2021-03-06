import React, {Component} from 'react';
import Map from './Components/Map.js'
import LocationList from './Components/Locations.js'
import Foursquare from './Components/Foursquare.js'
import Header from './Components/Header.js'
import './App.css';

class App extends Component {
  state = {
    locations: [
      {
        name: 'Mahane Yehuda',
        id: '4b7e63c5f964a5202aeb2fe3',
        lat: 31.785556,
        lng: 35.2100333,
        category: 'secular',
        index: 0
      }, {
        name: 'Western Wall Tunnel',
        id: '5714efd1498eb520fae237cb',
        lat: 31.772415,
        lng: 35.2211988,
        category: 'hangout',
        index: 1
      }, {
        name: 'Western Wall',
        id: '4b896c78f964a520ff3432e3',
        lat: 31.7767189,
        lng: 35.2323198,
        category: 'religious',
        index: 2
      }, {
        name: 'Church of the Holy Sepulchre',
        id: '4b599fc5f964a5207d8f28e3',
        lat: 31.7784813,
        lng: 35.2274115,
        category: 'religious',
        index: 3
      }, {
        name: 'Zion Square',
        id: '4b7325faf964a520569e2de3',
        lat: 31.7819264,
        lng: 35.2174048,
        category: 'hangout',
        index: 4
      }, {
        name: 'Temple Mount',
        id: '4fe5c6f2e4b051b5c1cd5c51',
        lat: 31.7786754,
        lng: 35.230610,
        category: 'religious',
        index: 5
      }
    ],
    defaultCenter: {
      lat: 31.7824533,
      lng: 35.1966413
    },
    modifiedCenter: {},
    defaultZoom: 14,
    modifiedZoom: 16,
    markerIcon: 'https://i.imgur.com/K0r44EI.png',
    modifiedMarkerIcon: 'https://i.imgur.com/K0r44EI.png',
    showMarkerIndex: 0,
    selectedCategory: 'all',
    filteredLocations: [],
    chosenLocation: '',
    toggleMenu: false,
    showInfoIndex: -1
  }

  //handles google maps error
  gm_authFailure () {
    window.alert("google Maps was unable to retrieve data. Please check connection.")
  }

  //sets filteredLocations to the initial state of all locations
  componentDidMount() {
    this.setState({filteredLocations: this.state.locations})
    window.gm_authFailure = this.gm_authFailure;
  }

  handleMarkerClick = (event, latlng, id, index) => {
    this.setState({
      showInfoIndex: index.index,
      markerIcon: 'https://i.imgur.com/K0r44EI.png',
      chosenLocation: id
    })
  }

  //show or hide menu
  handleToggleMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
    document.getElementById('sidebar').classList.toggle('menu-open')
  }

  handleFilter = (category) => {
    this.setState({selectedCategory: category, showInfoIndex: -1, chosenLocation: ''})
    if (category === 'all') {
      this.setState({filteredLocations: this.state.locations})
    } else {
      this.setState({
        filteredLocations: this.state.locations.filter(location => location.category === category)
      })
    }
  }

  onItemClick = (location) => {
    this.setState({chosenLocation: location.id, showInfoIndex: location.index})
  }

  render() {

    return (<main className="App">
      <Header handleToggleMenu={this.handleToggleMenu} />

      <Map
        locations={this.state.filteredLocations}
        onMarkerClick={this.handleMarkerClick}
        onHandleLocationSelected={this.handleLocationSelected}
        showInfoIndex={this.state.showInfoIndex}
        markerIcon={this.state.markerIcon}
      />
      <div id="sidebar" role="complementary">
        <div className="search">
          <select
            type="text"
            role="listbox"
            tabIndex="0"
            placeholder="Select category"
            value={this.state.selectedCategory}
            onChange={(event) => this.handleFilter(event.target.value)}>
            <option value="all">All Locations</option>
            <option value="secular">Secular</option>
            <option value="religious">Religious</option>
            <option value="hangout">Hangout</option>
          </select>
        </div>
        <div className="results">
          <LocationList
            locations={this.state.filteredLocations}
            onMarkerClick={this.handleMarkerClick}
            onItemClick={this.onItemClick}
            index={this.state.showInfoIndex}/>
        </div>
      </div>
      <Foursquare venue_id={this.state.chosenLocation}  infoIndex={this.state.showInfoIndex}/>
    </main>);
  }
}

export default App;
