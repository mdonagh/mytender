import React, { useState } from 'react'

import { View,
         Text,
         Image,
         StyleSheet,
         Dimensions,
         Button,
         Pressable,
       } from "react-native";

import Content from './bartender/Content.js'

import { GET_SHIFT } from "../gql/getShift";


function ShowBartender({ route, navigation }) {
  let shiftId = route.params.id
  let bannerUrl = route.params.bannerUrl

  const { loading, error, data, refetch } = useQuery(GET_SHIFT, {
    variables:  {id: shiftId},
  });

  console.log(route.params);
//   The problem is that I'm not really collecting much data on bartender currently
//   Like, what prevents this page from being good is that I don't have bartender name, I don't have bartender
//   intro sentence
// 
//   I don't have the bartender signup actually
//   So I have to just display the photo on this page, and then return to this page later
//   Also, I wonder if the load time would be faster if I were to pass the bannerUrl as a param to this page as well
//   Surely it would, right?

  console.log(bannerUrl);
  console.log(shiftId);
  console.log('nyah');
  console.log('fdsfdsfds');

  const {width, height} = Dimensions.get('window');

  const [selected, setSelected] = useState('description')
  const [liked, setLiked] = useState(false)

  const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain'
    },
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
      <Image style={{ flex: 6,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      width: width }}
        source={{uri: bannerUrl}}
      />
      <View style={{ flex: 1,
                     alignItems: 'center',
                     justifyContent: 'flex-start',
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     padding: 10
                    }}>
        <Pressable style={{flex: 1}} onPress={() => setSelected('description')}>
          <Image source={require('../assets/question-mark.png')} style={styles.image}  />
        </Pressable>
        <Pressable style={{flex: 1}} onPress={() => setSelected('payment')}>
          <Image source={require('../assets/money.png')} style={styles.image}  />
        </Pressable>
        <Pressable style={{flex: 1}} onPress={() => setLiked(!liked)}>
        {liked ? 
          <Image source={require('../assets/full-heart.png')} style={styles.image}  />
          :
          <Image source={require('../assets/empty-heart.png')} style={styles.image}  />
        }
        </Pressable>
        <Pressable style={{flex: 1}} onPress={() => setSelected('rideshare')}>
          <Image source={require('../assets/taxi.png')} style={styles.image}  />
        </Pressable>
      </View>
      <Content selected={selected} shiftId={shiftId} />
    </View>
  );
}

export default ShowBartender;
