import React, { useState } from 'react';

import { View,
         Text,
         Image,
         StyleSheet,
         Pressable,
         Linking,
         TouchableOpacity,
         Dimensions} from "react-native";

import { ListItem, Avatar } from '@rneui/themed';

import { gql, useQuery } from '@apollo/client';

import * as Location from 'expo-location';
import NeedLocation from '../NeedLocation'

import { RIDESHARE } from "../../gql/rideshare";

import LyftIcon from '../../assets/lyft.png'
import UberIcon from '../../assets/uber.png'


function RideShareLinks(props) {
  const {width, height} = Dimensions.get('window');

  const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    rideshareButton: {
        flex: 1,
        width: 44,
        height: 96,
        resizeMode: 'contain'
    },
  });

console.log('ppp');
  console.log(props);
console.log('ggg');

  const { loading, error, data } = useQuery(RIDESHARE, {
    variables:  {
      lat: props['coordinates']['latitude'],
      lng: props['coordinates']['longitude'],
      shiftId: props.shiftId
    },
  });

    if(loading){
      return(
        <>
        </>
        )
    } else {
      console.log('meow');
      console.log(data);
      console.log(error);
      console.log('meow');


      return(
        <>
      <Text style={{ flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      fontSize: 20,
                      fontWeight: 'bold',
                      padding: 20
                    }}
      >
        Tap the buttons below to get a rideshare to meet this bartender
      </Text>
      <View style={{ flex: 2,
                     alignItems: 'center',
                     justifyContent: 'flex-start',
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     padding: 10
                    }}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => Linking.openURL(data['rideshare']['lyft'])}
        >
          <Image 
            source={LyftIcon}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={{flex: 1}}  />
        <TouchableOpacity 
          style={{flex: 1}} 
          onPress={() => Linking.openURL(data['rideshare']['uber'])}
         >
          <Image
            source={UberIcon}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      </>
        )
    }
}

function RideShare(props) {
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [coordinates, setCoordinates] = useState(false);

  console.log(status)
  let granted = status ? status["granted"] : false

  if(!granted){
    requestPermission()
  }

  if(!coordinates && granted){
    Location.getLastKnownPositionAsync().then(response => {
        console.log(response)
        setCoordinates(response["coords"])
      });
  }

    if(coordinates && granted){
      return(

            <View style={{flex: 6}}>

        <RideShareLinks
        coordinates={coordinates}
        shiftId={props.shiftId}
        />
        </View>
    )
    } else if (!granted) {
      // Improve layout here
      return(
            <View style={{flex: 6}}>

        <NeedLocation />
        </View>
        )
    }
      else {
        return(    <View style={{flex: 6}}></View>)
      }
}

export default RideShare;
