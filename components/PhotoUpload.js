import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { CREATE_PHOTO } from "../gql/createPhoto";
import { withApollo } from '@apollo/client/react/hoc';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: false
    }
  }

  uploadImage = (url, picture, contentType) => {
    fetch(url, {
      method: 'PUT',
      body: picture,
      headers: {
        'Content-Type': contentType
      },
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

  pickBanner = () => {
    this.pickImage('BANNER')
  }

  pickHeadshot = () => {
    this.pickImage('HEADSHOT')
  }

  pickImage = async (photoKind) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      let uri = result.assets[0].uri
      this.setImage(result.assets[0].uri);

      const imagePath = uri;
      const imageExt = uri.split('.').pop();

      let picture = await fetch(imagePath);
      picture = await picture.blob();

      const imageData = new File([picture], `photo.${imageExt}`);

      let byteSize = picture["_data"]["size"]
      let contentType = picture["_data"]["type"]

      this.props.client.mutate({
        mutation: CREATE_PHOTO,
        variables: {
          bytes: byteSize,
          kind: photoKind
        },
      }).then(result => {
        console.log(JSON.stringify(result))
        let url = result["data"]["createPhoto"]["url"]
        this.uploadImage(url,
                         picture,
                         contentType)
    }).catch(error => {
      console.log("An error", error)
    });

    }
  }

  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Upload a headshot" onPress={this.pickHeadshot} />
        <Button title="Upload a banner photo" onPress={this.pickBanner} />
      </View>
    );
  }
}

export default withApollo(PhotoUpload);