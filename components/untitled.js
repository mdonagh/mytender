import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import md5 from 'md5';
import { CREATE_PHOTO } from "../gql/createPhoto";
import { withApollo } from '@apollo/client/react/hoc';
import { Buffer } from 'buffer'

import * as CryptoJS from 'crypto-js';


class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: false
    }
  }

  uploadImage = (url, picture, headers) => {
    console.log("got here")
    console.log()
    fetch(url, {
      method: 'PUT',
      body: picture,
      headers: headers,
    }).then(response => {
      console.log(JSON.stringify(response["_bodyBlob"]["_data"]["__collector"]))
      console.log('response')
      console.log(response)
      console.log(response.body)
      console.log(response.headers)
      console.log(response.status)
      console.log(response.statusText)
      console.log(response.type)
        // handle the response
    })
    .catch(error => {
      console.log('error')
      console.log(error)
        // handle the error
    });
  }

  setImage = (params) => this.setState({image: params});

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
      this.setImage(result.assets[0].uri);

      const imagePath = uri;
      const imageExt = uri.split('.').pop();
      const imageMime = `image/${imageExt}`;
      let picture = await fetch(imagePath);
      picture = await picture.blob();

      let checksum = md5(picture)
      console.log(checksum)

      const imageData = new File([picture], `photo.${imageExt}`);
      checksum = md5(imageData)
      console.log(checksum)
      checksum = new Buffer(checksum).toString("base64");
      console.log(checksum)

      var hash1 = CryptoJS.MD5(imageData);
      console.log(hash1)
      var digestResult = hash1.toString(CryptoJS.enc.Base64);
      checksum = digestResult
      console.log('alpha')
      console.log(checksum)

      console.log('meow')
      let byteSize = picture["_data"]["size"]
      let filename = picture["_data"]["name"]
      let contentType = picture["_data"]["type"]



      console.log(checksum)
      checksum = new Buffer(checksum).toString("base64");

      console.log(checksum)
      this.props.client.mutate({
        mutation: CREATE_PHOTO,
        variables: {
          filename: filename,
          byteSize: byteSize,
          checksum: checksum,
          contentType: contentType
        },
      }).then(result => {
        console.log(JSON.stringify(result))
        let url = result["data"]["createPhoto"]["presigned"]["url"]
        let headers = result["data"]["createPhoto"]["presigned"]["headers"]
        this.uploadImage(url,
                         picture,
                         headers)
    }).catch(error => {
      console.log("An error", error)
    });

    }
  }

render(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={this.pickImage} />
      {this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

}

export default withApollo(PhotoUpload);