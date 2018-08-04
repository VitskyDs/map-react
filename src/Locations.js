import React, {Component} from 'react';

function LocationList(props) {

  return (
    <ol>
      {props.locations.map(location => <li onClick={(event) => props.onItemClick(location.id)} key={location.id}>{location.name}</li>)}
    </ol>
  )
};

export default LocationList;
