import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {

   render() {

   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 31.7824533, lng: 35.1966413 } }
        defaultZoom = { 14 }
      >
      </GoogleMap>
   ));

   return(
      <div>
        <GoogleMapExample
          containerElement={ <div id="map-container" style={{  }} /> }
          mapElement={ <div id="map" /> }
        />
      </div>
   );

   }
};

export default Map;
