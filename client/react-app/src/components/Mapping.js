import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {useEffect, useState} from 'react';
//import { user_latitude, user_longitude } from '../pages/LandingPage';


const containerStyle = {
  width: '575px',
  height: '575px'
};

//console.log("lat: " + localStorage.getItem('user_latitude'));

const center = {
  lat: parseFloat(localStorage.getItem('user_latitude')),
  lng: parseFloat(localStorage.getItem('user_longitude'))
};

//console.log(center);

function Mapping() {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  //const originRef = useRef();

  //const destinationRef = useRef();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAsx7n3atfht4HeIQfvkKi2FJZdh_VnO7M"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center}></Marker>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default Mapping