import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';
import Martini from '../../../assets/martini.png';

export const MarkerDisplayItem = memo(({ shiftMarker, navigation }) => {
  return (
    <Marker
      key={shiftMarker.id}
      coordinate={{
        latitude: Number(shiftMarker.latitude),
        longitude: Number(shiftMarker.longitude),
      }}
      onPress={() =>
        navigation.navigate('Show Bartender', {
          id: shiftMarker.id,
          bannerUrl: shiftMarker.user.bannerUrl,
        })
      }
    >
      <View style={{ height: 64, width: 64 }}>
        {shiftMarker.user.headshotUrl ? (
          <Image
            style={markerStyles.stretch}
            source={{ uri: shiftMarker.user.headshotUrl }}
          />
        ) : (
          <Image style={markerStyles.stretch} source={Martini} />
        )}
      </View>
    </Marker>
  );
});

const markerStyles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    borderRadius: 40,
  },
});
