import React, { Component } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import Martini from '../../../assets/martini.png';
import { MarkerDisplay } from './MarkerDisplay';

export class TenderMap extends Component {
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
        latitude: props?.coordinates?.latitude,
        longitude: props?.coordinates?.longitude,
      },
      region: {
        latitude: props?.coordinates?.latitude,
        longitude: props?.coordinates?.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: this.kMToLongitudes(1.5, props?.coordinates?.latitude),
      },
      markers: [],
    };
  }

  onRegionChange = (region) => {
    this.setState({
      coordinates: {
        latitude: region?.latitude,
        longitude: region?.longitude,
      },
    });
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
