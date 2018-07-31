import React, { Component } from 'react';
import GoogleApiComponent from './GoogleApi.js'
import Map from './Map.js'

export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div id="map-container">
        <Map google={this.props.google} />
      </div>)
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyB_cm4XvzXaPXeMOQxzV6pLJvJ32COOH_M'
})(Container)
