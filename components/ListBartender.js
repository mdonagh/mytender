import React, { useState } from 'react';

import { Pressable, ScrollView } from 'react-native';

import { ListItem, Avatar } from '@rneui/themed';

import { gql, useQuery } from '@apollo/client';

import { LIST_BARTENDER } from '../gql/listBartender';
import * as Location from 'expo-location';
import NeedLocation from './NeedLocation';
import { useNavigation } from '@react-navigation/native';

function Bartenders(props) {
  const navigation = useNavigation();

  const { loading, error, data } = useQuery(LIST_BARTENDER, {
    variables: props.coordinates,
  });

  if (loading) {
    return <></>;
  } else {
    const bartenderList = data['nearbyShifts']['nodes'].map(function (node, i) {
      return (
        <ListItem
          key={i}
          bottomDivider
          onPress={() =>
            navigation.navigate('Show Bartender', {
              id: node['id'],
              bannerUrl: node['user']['bannerUrl'],
            })
          }
        >
          <Avatar rounded source={{ uri: node['user']['headshotUrl'] }} />
          <ListItem.Content>
            <ListItem.Title>{node['barName']}</ListItem.Title>
            <ListItem.Subtitle>{node['notes']}</ListItem.Subtitle>
            <ListItem.Subtitle>{node['distance']}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    });

    return <ScrollView>{bartenderList}</ScrollView>;
  }
}

function ListBartender() {
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [coordinates, setCoordinates] = useState(false);

  console.log(status);
  let granted = status ? status['granted'] : false;

  if (!granted) {
    requestPermission();
  }

  if (!coordinates && granted) {
    Location.getLastKnownPositionAsync().then((response) => {
      console.log(response);
      setCoordinates(response['coords']);
    });
  }

  if (granted) {
    return <Bartenders coordinates={coordinates} />;
  } else if (!granted) {
    // Improve layout here
    return <NeedLocation />;
  } else {
    return <></>;
  }
}

export default ListBartender;
