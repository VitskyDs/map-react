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
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDizKGb8jtfICQ-gk8OrnI7rcxguYEEBQo", loadingElement: <div style={{
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
      const bounds = new window.google.maps.LatLngBounds();
      ref.props.children.forEach((child) => {
        if (child.type === Marker) {
          bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
        }
      })
      ref.fitBounds(bounds);
    }
  }
}), withScriptjs, withGoogleMap)(props => {
  let iconDefault = {
    url: 'https://i.imgur.com/2Dux7jv.png'
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
          animation={props.showInfoIndex === index ? google.maps.Animation.BOUNCE : ''} />)
    )}
  </GoogleMap>
  )
}
);

export default ComposeMap
