import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Avatar } from '@rneui/themed';

import Martini from '../assets/martini.png';

import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import { gql, useQuery } from '@apollo/client';

import { NEARBY_SHIFTS } from '../gql/nearbyShifts';
import Toast from 'react-native-toast-message';
import BarBackground from '../assets/black-white-bar.png';

import NeedLocation from './NeedLocation';
const markerStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    borderRadius: 40,
  },
});

const MarkerDisplay = (props) => {
  const { loading, error, data } = useQuery(NEARBY_SHIFTS, {
    variables: props['coordinates'],
  });

  if (error) {
    Toast.show({
      type: 'error',
      text1: error.message,
    });
  }

  if (loading) {
    return;
  } else {
    console.log(props['coordinates']);
    console.log(error);
    console.log(data);
    console.log(JSON.stringify(data['nearbyShifts']['nodes']));

    const shiftMarkers = data['nearbyShifts']['nodes'].map(function (node, i) {
      return (
        <Marker
          key={i}
          coordinate={{
            latitude: Number(node['latitude']),
            longitude: Number(node['longitude']),
          }}
          onPress={() =>
            props.navigation.navigate('Show Bartender', {
              id: node['id'],
              bannerUrl: node['user']['bannerUrl'],
            })
          }
        >
          <View style={{ height: 64, width: 64 }}>
            {node['user']['headshotUrl'] ? (
              <Image
                style={markerStyles.stretch}
                source={{ uri: node['user']['headshotUrl'] }}
              />
            ) : (
              <Image style={markerStyles.stretch} source={Martini} />
            )}
          </View>
        </Marker>
      );
    });
    console.log(shiftMarkers);
    return <>{shiftMarkers}</>;
  }
};

class TenderMap extends React.Component {
  degreesToRadians = (angle) => {
    return angle * (Math.PI / 180);
  };

  kMToLongitudes = (km, atLatitude) => {
    return (km * 0.0089831) / Math.cos(this.degreesToRadians(atLatitude));
  };

  constructor(props) {
    super(props);
    const LATITUDE_DELTA = 0.0000001;

    this.state = {
      coordinates: {
        latitude: props.coordinates['latitude'],
        longitude: props.coordinates['longitude'],
      },
      region: {
        latitude: props.coordinates['latitude'],
        longitude: props.coordinates['longitude'],
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: this.kMToLongitudes(1.5, props.coordinates['latitude']),
      },
      markers: [],
    };

    console.log(this.state);
  }

  onRegionChange = (region) => {
    this.setState({
      coordinates: {
        latitude: region['latitude'],
        longitude: region['longitude'],
      },
    });
    console.log(this.state.coordinates);
    console.log(region);
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChangeComplete={this.onRegionChange}
        >
          <MarkerDisplay
            navigation={this.props.navigation}
            coordinates={this.state.coordinates}
          />
        </MapView>
        <Pressable
          style={{ alignSelf: 'flex-start' }}
          onPress={() => this.props.navigation.navigate('Menu')}
        >
          <Image rounded source={Martini} style={styles.martini} />
        </Pressable>
      </View>
    );
  }
}

const ShowMap = () => {
  const navigation = useNavigation();

  const [status, requestPermission] = Location.useForegroundPermissions();
  const [coordinates, setCoordinates] = useState(false);

  console.log(status);
  let granted = status ? status['granted'] : false;

  if (!granted) {
    requestPermission();
  }

  if (!coordinates && granted) {
    Location.getLastKnownPositionAsync().then((response) => {
      console.log(response);
      setCoordinates(response['coords']);
    });
  }

  if (coordinates && granted) {
    return <TenderMap navigation={navigation} coordinates={coordinates} />;
  } else if (!granted) {
    // Improve layout here
    return <NeedLocation />;
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  bigContainer: {
    flex: 1,
  },
  warningText: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 30,
  },
  martini: {
    resizeMode: 'stretch',
    borderRadius: 40,
    width: 70,
    height: 70,
    margin: 20,
  },
});

export default ShowMap;
