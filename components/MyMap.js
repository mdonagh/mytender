import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
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
const LATITUDE = 32.71146432849882;
const LONGITUDE = -117.15467612584527;
const LATITUDE_DELTA = 0.0000001;
const LONGITUDE_DELTA = kMToLongitudes(1.0, 47.61105551203619);
let id = 0;

const markerStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});

class MarkerDisplay extends React.Component{
render(){
return(
  <Marker
    title="Woof"
    key="WOof"
    coordinate={{latitude: 32.71146432849884, longitude: -117.15467612584527}}
  >
    <View style={{padding: 10}}>
      <Image
        style={markerStyles.stretch}
        source={{uri: 'https://reactjs.org/logo-og.png'}}
      />
      <Text>SF</Text>
    </View>
  </Marker>
  );
}
}

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
          <MarkerDisplay/>
          {/* <Marker */}
          {/*     title="Woof" */}
          {/*     key="WOof" */}
          {/*     coordinate={{latitude: 32.71146432849882, longitude: -117.15467612584527}} */}
          {/*   /> */}
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