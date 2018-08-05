import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var foursquare = require('react-foursquare')({clientID: 'SBNJXJYGDIHGJNQZU2GQ4B5RKPFSL12BYBFVAQ1JG0HMP2MD', clientSecret: 'V30VCXEPBYBPNATBSM1L0JGPXDLM5MJME1UEMSPEGB2YWRN5'});

var params = {
  "venue_id": ''
};

class Foursquare extends Component {

  state = {
    "venue_id": {
      "venue_id": ''
    },
    items: []
  };

  componentWillReceiveProps(nextProps) {

    if (nextProps.venue_id !== '') {
      params = {
        "venue_id": nextProps.venue_id
      }
      this.setState({venue_id: nextProps.venue_id});
      foursquare.venues.getVenue(params).then(res => {
        this.setState({items: res.response.venue, image: `${res.response.venue.bestPhoto.prefix}612x612${res.response.venue.bestPhoto.suffix} `});
        console.log(res.response);
      });
    }
  }

  render() {
    if (this.props.venue_id !== '') {
      return (<div className="location-box">
        <div className="location-title">{this.state.items.name}</div>
        <div className="location-rating">{this.state.items.rating ?  ` Rating: ${this.state.items.rating}` : ''}</div>
        <img className="location-image" src={this.state.image}/>
      </div>)
    } else {
      return <div></div>
    }

  }
}

export default Foursquare
