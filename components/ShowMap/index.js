import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import React, { useState } from 'react';
import NeedLocation from '../NeedLocation';
import { TenderMap } from './components/TenderMap';

const ShowMap = () => {
  const navigation = useNavigation();

  const [status, requestPermission] = Location.useForegroundPermissions();
  const [coordinates, setCoordinates] = useState(null);

  let granted = status ? status.granted : false;

  if (!granted) {
    requestPermission();
  }

  if (!coordinates && granted) {
    Location.getLastKnownPositionAsync().then((response) => {
      setCoordinates(response.coords);
    });
  }

  if (coordinates && granted) {
    return <TenderMap navigation={navigation} coordinates={coordinates} />;
  } else if (!granted) {
    // Improve layout here
    return <NeedLocation />;
  } else {
    return null;
  }
};

export default ShowMap;
