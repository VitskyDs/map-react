import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultCenter={{
      lat: 31.7824533,
      lng: 35.1966413
    }} defaultZoom={14}>

    {
      props.locations.map((location) => {
        return (<Marker
          key={location.id}
          position={{
            lat: location.lat,
            lng: location.lng
          }}
        onClick={props.onMarkerClick}
      />)})
    }
    
  </GoogleMap>
))

class Map extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = (event) => {
    console.log(event)
  }

  render() {
    return (
      <MapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_cm4XvzXaPXeMOQxzV6pLJvJ32COOH_M"
        loadingElement={ <div style={{height: `100%`}}/> }
        containerElement={ <div id="map-container"/> }
        mapElement={ <div id="map"/> }
        locations={this.props.locations}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default Map
