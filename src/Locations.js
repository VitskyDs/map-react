import React, {Component} from 'react';

function Locations(props) {

  let locationsToRender = props.locations;
  console.log(locationsToRender);

  if (props.selectedCategory !== 'all') {
    locationsToRender = props.locations.filter(location => location.category === props.selectedCategory)
  }

  return (
    <ol>
      {
        locationsToRender.map( (location) => {
          return (
            <li key={location.id}>{location.name}</li>
          )
        })
      }
    </ol>
  )
};

export default Locations;
