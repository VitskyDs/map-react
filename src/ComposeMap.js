import React, {Component} from 'react'
/*global google*/
import {
  compose,
  withProps,
  withState,
  lifecycle,
  withStateHandlers,
  withHandlers
} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps'

const ComposeMap = compose(withProps({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBfB8UMdS7E9dAIHPW3HzKTkkjsMHg2i0I", loadingElement: <div style={{
      height: `100%`
    }}/>,
  containerElement: <div id="map-container"/>,
  mapElement: <div id="map"/>
}), withHandlers(() => {
  const refs = {
    map: undefined
  }
  return {
    onMapMounted: () => ref => {
      refs.map = ref
      //console.log("Zoom to markers");
      const bounds = new window.google.maps.LatLngBounds();
      ref.props.children.forEach((child) => {
        // console.log('iterating over map children')
        if (child.type === Marker) {
          //console.log('extending bounds for ', child.props.position.lat, child.props.position.lng)
          bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
        }
      })
      ref.fitBounds(bounds);
    }
  }
}), withScriptjs, withGoogleMap)(props => {
  let iconDefault = {
    url: 'http://maps.gstatic.com/mapfiles/markers2/boost-marker-mapview.png'
  }

  return (<GoogleMap zoom={props.zoom} center={props.appCenter} mapTypeId='roadmap' ref={props.onMapMounted} onZoomChanged={props.onZoomChanged} onCenterChanged={props.onCenterChanged}>
    {
      props.markers.map((marker, index) => (
        <Marker
          key={index}
          icon={props.showInfoIndex === index?  props.markerIcon : iconDefault}
          position={{lat: marker.lat,lng: marker.lng}}
          title={marker.title}
          onClick={(event) => {props.onMarkerClicked(event, {lat: marker.lat, lng: marker.lng}, {index})}}
          animation={props.showInfoIndex === index? google.maps.Animation.BOUNCE : google.maps.Animation.DROP } />)
    )}
  </GoogleMap>
  )
}
);

export default ComposeMap
