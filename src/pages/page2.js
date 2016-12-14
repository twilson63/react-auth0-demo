const React = require('react')
const {Link} =  require('react-router')

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
))

module.exports = () =>
  <div>
    <h1>Page2</h1>
    <Link to="/">Home</Link>
    <GettingStartedGoogleMap
      containerElement={
        <div style={{ height: '400px' }} />
      }
      mapElement={
        <div style={{ height: '400px' }} />
      }
      onMapLoad={() => null }
      onMapClick={() => null }
      markers={[{
        position: {
          lat: 25.0112183,
          lng: 121.52067570000001,
        },
        key: `Taiwan`,
        defaultAnimation: 2,
      }]}
      onMarkerRightClick={() => null }
    />
  </div>
