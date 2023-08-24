import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  ImageBackground
} from 'react-native';

import BarBackground from '../assets/black-white-bar.png'

function NeedLocation() {
  return(
    <View style={styles.bigContainer}>
      <ImageBackground 
        source={BarBackground}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={{backgroundColor: 'white', margin: 10, borderRadius: 40, overflow: 'hidden'}}>
        <Text style={styles.warningText}>You must allow this app to access your location</Text>
        </View>
      </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center', 
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
    marginBottom: 30
  },
  martini: {
    resizeMode: 'stretch',
    borderRadius: 40,
    width: 70,
    height: 70,
    margin: 20,
  },
});

export default NeedLocation;
