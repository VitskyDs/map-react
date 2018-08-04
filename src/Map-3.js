import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {

   render() {

   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{
          lat: 31.7824533,
          lng: 35.1966413
        }} defaultZoom={14}
      >
      </GoogleMap>
   ));

   return(
      <div>
        <GoogleMapExample
          loadingElement={ <div style={{height: `100%`}}/> }
          containerElement={ <div id="map-container"/> }
          mapElement={ <div id="map"/> }
          locations={this.props.locations}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>
   );

   }
};

export default Map;
