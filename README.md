# FEND-Project8 Neighborhood Map

This is a map of my favorite places in Jerusalem. You can click on either location to see its properties and filter locations by categories (Secular, Religious, Hangout).

This project uses the Google Maps API for the map and markers and the Foursquare API for info about the different locations.

## Instructions

Download or clone this repository. Change Directory into it and run:

`yarn install`

Before running build, there is a bug with the Foursquare dependency which interrupts the build process. So in order to use the production build you must find the 'react-foursquare' in the newly created 'node_modules' directory, and change 'request.js' content to this:

```
module.exports = function(urlString) {
  return new Promise(function(resolve, reject) {
    fetch(urlString)
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error)
      })
  })
}
```

Only now you can run the following:

`npm run build`
`serve -s build`

and the app will be available at: http://localhost:5000

## Geeking out

For all you react buffs out there, here  is a component rundown:

### Project Components:
* App.js - obviously
* Map.js - Google map component
* Locations.js - List of predefined locations
* Foursquare.js - Foursquare component

## License
The MIT License (MIT)
