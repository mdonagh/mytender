import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { gql, useQuery, useMutation } from '@apollo/client';

import { CREATE_PHOTO } from "../gql/createPhoto";
import { CURRENT_PHOTOS } from "../gql/currentPhotos";

import MissingPerson from '../assets/missing-person.png'


function PhotoUpload() {
  const { loading, error, data, refetch } = useQuery(CURRENT_PHOTOS);
  const [createPhoto, { mutationData, mutationLoading, mutationError }] = useMutation(CREATE_PHOTO);

  const pickBanner = () => {
    pickImage('BANNER')
  }

  const pickHeadshot = () => {
    pickImage('HEADSHOT')
  }

  const uploadImage = (url, picture, contentType) => {
    fetch(url, {
      method: 'PUT',
      body: picture,
      headers: {
        'Content-Type': contentType
      },
    }).then(response => {
      console.log(response);
      refetch();
    })
    .catch(error => {
      console.log('error')
      console.log(error)
        // handle the error
    });
  }

  const pickImage = async (photoKind) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imagePath = result.assets[0].uri

      let picture = await fetch(imagePath);
      picture = await picture.blob();

      const byteSize = picture["_data"]["size"]
      const contentType = picture["_data"]["type"]

      createPhoto({
            variables: {
              bytes: byteSize,
              kind: photoKind
            },
          }).then(result => {
            const url = result["data"]["createPhoto"]["url"]
            uploadImage(url,
                        picture,
                        contentType)
        }).catch(error => {
          console.log("An error", error)
        });
      }
    }

    console.log(JSON.stringify(data));

    const headshotUrl = data["user"]["headshotUrl"]
    const bannerUrl = data["user"]["bannerUrl"]

    if(loading){
      return(<></>)
    }

  const styles = StyleSheet.create({
    image: {
      height: 150,
      width: 150,
      justifyContent: 'center'
    },
  });

  return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       { headshotUrl ?
            <Image
              style={styles.image}
              source={{uri: headshotUrl}}
            />
            :
            <Image
              style={styles.image}
              source={MissingPerson}
            />
        }
        <Button title="Upload a new headshot" onPress={pickHeadshot} />
       { bannerUrl ?
            <Image
              style={styles.image}
              source={{uri: bannerUrl}}
            />
            :
            <Image
              style={styles.image}
              source={MissingPerson}
            />
        }
        <Button title="Upload a new banner photo" onPress={pickBanner} />
      </View>
    )
}

export default PhotoUpload;