import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
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
const LATITUDE = 47.61105551203619;
const LONGITUDE = -122.19606607828442;
const LATITUDE_DELTA = 0.0000001;
const LONGITUDE_DELTA = kMToLongitudes(1.0, 47.61105551203619);
let id = 0;

class MyMap extends React.Component{
  constructor(props: any) {
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
          <Marker
              title="Woof"
              key="WOof"
              coordinate={{latitude: 47.61037746816593, longitude: -122.19574457168427}}
            />
        </MapView>
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
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default MyMap;