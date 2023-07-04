import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Pressable
} from 'react-native';

import { Avatar } from '@rneui/themed';

import Martini from '../assets/martini.jpg'

import MapView, {Marker, Callout} from 'react-native-maps';
// @ts-ignore

import * as Location from 'expo-location';

const {width, height} = Dimensions.get('window');

function radiansToDegrees(angle) {
  return angle * (180 / Math.PI);
}

function degreesToRadians(angle) {
  return angle * (Math.PI / 180);
}

function latitudesToKM(latitudes) {
  return latitudes * 110.574;
}

function kMToLatitudes(km) {
  return km / 110.574;
}

function longitudesToKM(longitudes, atLatitude) {
  return longitudes * 111.32 * Math.cos(degreesToRadians(atLatitude));
}

function kMToLongitudes(km, atLatitude) {
  return km * 0.0089831 / Math.cos(degreesToRadians(atLatitude));
}

const ASPECT_RATIO = width / height;
const LATITUDE = 32.71146432849882;
const LONGITUDE = -117.15467612584527;
const LATITUDE_DELTA = 0.0000001;
const LONGITUDE_DELTA = kMToLongitudes(1.5, 47.61105551203619);
let id = 0;

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

class MarkerDisplay extends React.Component{
  constructor(props) {
    super(props);
  }

render(){
  // const [status, requestPermission] = Location.useForegroundPermissions();
  // console.log(status)
  // console.log(requestPermission);
return(
  <>
  <Marker
    key="Tender"
    coordinate={{latitude: 32.71146432849884, longitude: -117.15467612584527}}
    onPress={() => this.props.navigation.navigate('Show Bartender')}
  >
  <View style={{ height: 64, width: 64}} >
      <Image
        style={markerStyles.stretch}
        source={{uri: 'https://avatars.githubusercontent.com/u/7103655?v=4'}}
      />
    </View>
  </Marker>
  <Marker
    key="Tender2"
    coordinate={{latitude: 32.70756699800065, longitude: -117.15705293106377}}
    onPress={() => this.props.navigation.navigate('Show Bartender')}
  >
  <View style={{ height: 64, width: 64}} >
      <Image
        style={markerStyles.stretch}
        source={{uri: 'https://randomuser.me/api/portraits/men/30.jpg'}}
      />
    </View>
  </Marker>
  </>
  );
}
}

class ShowMap extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          >
          <MarkerDisplay navigation={this.props.navigation} />
        </MapView>
        <Pressable 
          style={{alignSelf: 'flex-start'}}
          onPress={() => this.props.navigation.navigate('Menu')}
        >
        <Image
          rounded
          source={Martini}
          style={styles.martini}
        />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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