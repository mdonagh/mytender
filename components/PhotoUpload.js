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
import md5 from 'md5';
import { CREATE_PHOTO } from "../gql/createPhoto";
import { withApollo } from '@apollo/client/react/hoc';

class PhotoUpload extends React.Component {
  uploadImage = async (imageData, imageExt) => {
    console.log(md5(imageData))

  }

  pickImage = async () => {
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

      let byteSize = picture["_data"]["size"]
      let filename = picture["_data"]["name"]
      let contentType = picture["_data"]["type"]
      let checksum = md5(imageData)
      this.props.client.mutate({
        mutation: CREATE_PHOTO,
        variables: {
          filename: filename,
          byteSize: byteSize,
          checksum: checksum,
          contentType: contentType
        },
      }).catch(error => console.log("An error", error));

      await uploadImage(imageData, imageExt)
    }
  }

render(){
  const image = this.state.image;
  const setImage = (params) => this.setState({image: params});

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

}

export default withApollo(PhotoUpload);