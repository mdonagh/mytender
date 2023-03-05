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

function ShowBartender() {

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
        source={require('../assets/bartender.jpeg')}
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
      <Content selected={selected} />
    </View>
  );
}

export default ShowBartender;
