import React, {useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {mapStyle} from '../styles/mapStyle';
const Home = () => {
  useEffect(() => {
    findCoordinates();
  }, []);

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.25,
    longitudeDelta: 0.009,
  });

  const findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (info) => (
        setRegion({
          ...region,
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        }),
        console.log(info)
      ),
    );
  };

  return (
    <MapView
      style={{flex: 1}}
      region={region}
      showsUserLocation={true}
      customMapStyle={mapStyle}
    />
  );
};
export default Home;