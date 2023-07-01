import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Image } from "react-native-image-crop-picker"

class PhotoUpload extends React.Component{
  constructor(props) {
    super(props);
  }

render(){
return(
  <>
  <text>woof</text>
  </>
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

export default PhotoUpload;