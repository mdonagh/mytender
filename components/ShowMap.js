import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Pressable
} from 'react-native';

import Martini from '../assets/martini.jpg'

import MapView, {Marker, Callout} from 'react-native-maps';
// @ts-ignore

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
return(
  <Marker
    key="Tender"
    coordinate={{latitude: 32.71146432849884, longitude: -117.15467612584527}}
    onPress={() => this.props.navigation.navigate('ShowBartender')}
  >
  <View style={{ height: 50, width: 50}} >
      <Image
        style={markerStyles.stretch}
        source={{uri: 'https://avatars.githubusercontent.com/u/7103655?v=4'}}
      />
    </View>
  </Marker>
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
          source={Martini}
          style={styles.image}
        />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    margin: 20,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ShowMap;