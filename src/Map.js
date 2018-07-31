import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {

   render() {

   const JlmMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 31.7824533, lng: 35.1966413 } }
        defaultZoom = { 14 }
      >
        {this.props.locations.map( location => {
          return <Marker position={{ lat: location.lat , lng: location.lng}}/>
        })}

      </GoogleMap>
   ));

  <JlmMap />
   return(
      <div>
        <JlmMap
          containerElement={ <div id="map-container"/> }
          mapElement={ <div id="map" /> }
        />
      </div>
   );

   }
};

export default Map;
