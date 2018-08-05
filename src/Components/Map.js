import React, {Component} from 'react';
import CompositeGoogleMap from './ComposeMap.js'

class Map extends Component {

  render() {

    let markers = [],
    marker = {}

    this.props.locations.map((location) => {
      marker = {
        lat: location.lat,
        lng: location.lng,
        venue_id: location.id
      }
      markers.push(marker)
    })
    return (
      <CompositeGoogleMap
        markers={markers}
        onMarkerClicked={this.props.onMarkerClick}
        showInfoIndex={this.props.showInfoIndex}
        markerIcon={this.props.markerIcon}
    />);
  }
};

export default Map;
