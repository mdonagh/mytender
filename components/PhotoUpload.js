import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

import { Buffer } from 'buffer'
import RNFS from 'react-native-fs'

import * as ImagePicker from 'expo-image-picker';
function PhotoUpload() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const hex = await RNFS.hash(r.path, 'md5')
      const base64 = Buffer.from(hex, 'hex').toString('base64')
      console.log(hex)
      console.log(base64)
      console.log('meow')
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

export default PhotoUpload;