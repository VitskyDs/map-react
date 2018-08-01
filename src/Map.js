import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends Component {

  render() {

    let locationsToRender = this.props.locations;
    console.log(locationsToRender);

    if (this.props.selectedCategory !== 'all') {
      locationsToRender = this.props.locations.filter(location => location.category === this.props.selectedCategory)
    }

    const JlmMap = withGoogleMap((props) => (<GoogleMap defaultCenter={{
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
    </GoogleMap>));

    return (<div>
      <JlmMap containerElement={<div id = "map-container" />} mapElement={<div id = "map" />}/>
    </div>);

  }
};

export default Map;
