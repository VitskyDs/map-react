import React, {Component} from 'react';

function LocationList(props) {
  let index = props.index;

  return (
    <ol>
      {props.locations.map( location => <li onClick={(event) => props.onItemClick(location)} key={location.id} index={index++}>{location.name}</li>)}
    </ol>
  )
};

export default LocationList;
