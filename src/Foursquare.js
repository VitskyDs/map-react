import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var foursquare = require('react-foursquare')({
  clientID: 'SBNJXJYGDIHGJNQZU2GQ4B5RKPFSL12BYBFVAQ1JG0HMP2MD',
  clientSecret: 'V30VCXEPBYBPNATBSM1L0JGPXDLM5MJME1UEMSPEGB2YWRN5'
});

var params = {
  "ll": "31.785556, 35.2100333",
  "venue_id": '4b7e63c5f964a5202aeb2fe3'
};

var id = '4b7e63c5f964a5202aeb2fe3';

class FoursquareDemo extends Component {

  constructor(props) {
     super(props);
     this.state = {
       items: []
     };
   }

  componentDidMount() {
    foursquare.venues.getVenue(params)
      .then(res=> {
        this.setState({ items: res.response.venue, image: `${res.response.venue.bestPhoto.prefix}612x612${res.response.venue.bestPhoto.suffix} `});
        console.log(res.response);
      });
  }

  render() {
    return (
    <div className="location-box">
      <div className="location-title">{this.state.items.name}</div>
      <div className="location-likes">{this.state.items.name}</div>
      <div className="location-rating">{this.state.items.rating}</div>
        <img className="location-image" src={this.state.image}  />
    </div>
  )
  }
}

export default FoursquareDemo
