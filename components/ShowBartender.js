import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  Pressable,
} from 'react-native';

import Content from './bartender/Content.js';
import BarBackground from '../assets/empty-bar.png';
import { GET_SHIFT } from '../gql/getShift';
import { gql, useQuery } from '@apollo/client';

function ShowBartender({ route, navigation }) {
  let shiftId = route.params.id;
  let bannerUrl = route.params.bannerUrl;
  const { width, height } = Dimensions.get('window');

  const [selected, setSelected] = useState('description');
  const [liked, setLiked] = useState(false);

  const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain',
    },
  });

  const { loading, error, data } = useQuery(GET_SHIFT, {
    variables: { id: shiftId },
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Image
        style={{
          flex: 6,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          width: width,
        }}
        source={bannerUrl ? { uri: bannerUrl } : BarBackground}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10,
        }}
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => setSelected('description')}
        >
          <Image
            source={require('../assets/question-mark.png')}
            style={styles.image}
          />
        </Pressable>
        <Pressable style={{ flex: 1 }} onPress={() => setSelected('payment')}>
          <Image source={require('../assets/money.png')} style={styles.image} />
        </Pressable>
        <Pressable style={{ flex: 1 }} onPress={() => setSelected('rideshare')}>
          <Image source={require('../assets/taxi.png')} style={styles.image} />
        </Pressable>
        {!loading && data && data['shift']['user']['instagram'] ? (
          <Pressable
            style={{ flex: 1 }}
            onPress={() =>
              Linking.openURL(
                `https://instagram.com/${data['shift']['user']['instagram']}`
              )
            }
          >
            <Image
              source={require('../assets/instagram.png')}
              style={styles.image}
            />
          </Pressable>
        ) : (
          <></>
        )}
      </View>
      {!loading && data ? (
        <Content selected={selected} shiftId={shiftId} data={data} />
      ) : (
        <></>
      )}
    </View>
  );
}

export default ShowBartender;
