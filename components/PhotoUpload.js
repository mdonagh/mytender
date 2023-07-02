import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

import { Buffer } from 'buffer'

import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import md5 from 'md5';

function PhotoUpload() {
  const [image, setImage] = useState(null);

myImageHashFunction = async (imageUri) => {
  let fsInfo = await FileSystem.readAsStringAsync(imageUri, [{ md5: true }] )
  console.log(fsInfo)
}

const getMethods = (obj) => {
  let properties = new Set()
  let currentObj = obj
  do {
    Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
  } while ((currentObj = Object.getPrototypeOf(currentObj)))
  return [...properties.keys()].filter(item => typeof obj[item] === 'function')
}

  const uploadImage = async (imageData, imageExt) => {
    console.log(md5(imageData))

  }

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
      let uri = result.assets[0].uri
      setImage(result.assets[0].uri);

      const imagePath = uri;
      const imageExt = uri.split('.').pop();
      const imageMime = `image/${imageExt}`;
      let picture = await fetch(imagePath);
      picture = await picture.blob();

      const imageData = new File([picture], `photo.${imageExt}`);

      let byte_size = picture["_data"]["size"]
      let filename = picture["_data"]["name"]
      let content_type = picture["_data"]["type"]
      let checksum = md5(imageData)

      await uploadImage(imageData, imageExt)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

export default PhotoUpload;