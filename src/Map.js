import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends Component {

  render() {

    // in case there is a category chose, filter the locations array
    let locationsToRender = this.props.locations;
    console.log(locationsToRender);

    if (this.props.selectedCategory !== 'all') {
      locationsToRender = this.props.locations.filter(location => location.category === this.props.selectedCategory)
    }

    //define map variable
    const JlmMap = withScriptjs(withGoogleMap((props) => (<GoogleMap defaultCenter={{
        lat: 31.7824533,
        lng: 35.1966413
      }} defaultZoom={14}>
      {
        locationsToRender.map((location) => {
          return (<Marker key={location.id} position={{
              lat: location.lat,
              lng: location.lng
            }}/>)
        })
      }
    </GoogleMap>)));

    //instantiate map
    return (<div>
      <JlmMap
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div id = "map-container" />}
        mapElement={<div id = "map" />}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_cm4XvzXaPXeMOQxzV6pLJvJ32COOH_M"
         />}

      />
    </div>);

  }
};

export default Map;
