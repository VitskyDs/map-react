import {compose, withProps} from 'recompose'
import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';


    //define map variable
const JlmMap = compose(withProps({
  loadingElement: <div style={{height: `100%`}}/>,
  containerElement: <div id="map-container"/>,
  mapElement: <div id="map"/>,
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB_cm4XvzXaPXeMOQxzV6pLJvJ32COOH_M"
  }), withScriptjs, withGoogleMap)((props) =>
  <GoogleMap defaultCenter={{
    lat: 31.7824533,
    lng: 35.1966413
    }} defaultZoom={14}>

    {
      props.locations.map((location) => {
        return (<Marker
          key={props.location.id}
          position={{
            lat: props.location.lat,
            lng: props.location.lng
          }}
          onClick={props.onMarkerClick}
        />)})
    }



</GoogleMap>)

class Map extends React.PureComponent {
    state = {
      isMarkerShown: false,
      locationsToRender: []
    }

    componentDidMount() {
      this.delayedShowMarker()
    }

    delayedShowMarker = () => {
      setTimeout(() => {
        this.setState({ isMarkerShown: true })
      }, 3000)
    }

    handleMarkerClick = () => {
      this.setState({ isMarkerShown: false })
      this.delayedShowMarker()
    }

    render() {
      return (
        <JlmMap/>
      )
    }
}

export default Map
