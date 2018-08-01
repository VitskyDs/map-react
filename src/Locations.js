import React, {Component} from 'react';

function Locations(props) {

  // in case there is a category chose, filter the locations array
  let locationsToRender = props.locations;
  console.log(locationsToRender);

  if (props.selectedCategory !== 'all') {
    locationsToRender = props.locations.filter(location => location.category === props.selectedCategory)
  }

  return (
    <ol>
      {
        locationsToRender.map( location =>  <li key={location.id}>{location.name}</li> )
      }
    </ol>
  )
};

export default Locations;
