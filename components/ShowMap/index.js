import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import React, { useState } from 'react';
import NeedLocation from '../NeedLocation';
import { TenderMap } from './components/TenderMap';
import ScreenLayout from '../ScreenLayout';

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
    return (
      <ScreenLayout title="Explore View">
        <TenderMap navigation={navigation} coordinates={coordinates} />
      </ScreenLayout>
    );
  } else if (!granted) {
    // Improve layout here
    return <NeedLocation title="Explore View" />;
  } else {
    return null;
  }
};

export default ShowMap;
