import React, {Component} from 'react';
import CompositeGoogleMap from './ComposeMap.js'

class Map extends Component {

  state = {
    markers: [],
    center: {}
  }

  render() {
    let { onMarkerClick, showInfoIndex, markerIcon } = this.props

    let onLocationClicked = (event, markerLocation, index) => {
      this.props.onMarkerClick(event, markerLocation, index)
    }

    let markers = []
    let marker = {}

    this.props.locations.map((loc) => {
      marker = {
        lat: loc.lat,
        lng: loc.lng,
        title: loc.name,
        venue_id: loc.id
      }
      markers.push(marker)
    })

    return (<div>
      <CompositeGoogleMap
        markers = {markers}
        onMarkerClicked = {onLocationClicked}
        showInfoIndex = {showInfoIndex}
        markerIcon = {markerIcon}
       />
    </div>);

  }
};

export default Map;
