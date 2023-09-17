import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from '@rneui/themed';
import * as Location from 'expo-location';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { LIST_BARTENDER } from '../gql/listBartender';
import NeedLocation from './NeedLocation';
import ScreenLayout from './ScreenLayout';

const Bartenders = (props) => {
  const navigation = useNavigation();

  const { loading, error, data } = useQuery(LIST_BARTENDER, {
    variables: props.coordinates,
  });

  if (loading) {
    return <></>;
  } else {
    const bartenderList = data?.nearbyShifts?.nodes?.map(function (node, i) {
      return (
        <List.Item
          key={node.id}
          title={node['barName']}
          description={node['notes']}
          left={(props) => (
            <Avatar
              {...props}
              style={[props.style, { width: 30, height: 30 }]}
              rounded
              source={{ uri: node['user']['headshotUrl'] }}
            />
          )}
          onPress={() =>
            navigation.navigate('Show Bartender', {
              id: node['id'],
              bannerUrl: node['user']['bannerUrl'],
              headshotUrl: node['user']['headshotUrl'],
              name: node['user']['name'],
            })
          }
        />
      );
    });

    return (
      <ScrollView>
        <List.Section title="Near Bartenders">{bartenderList}</List.Section>
      </ScrollView>
    );
  }
};

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
    return (
      <ScreenLayout noCenter title="Bartenders">
        <Bartenders coordinates={coordinates} />
      </ScreenLayout>
    );
  } else if (!granted) {
    return <NeedLocation title="List View" />;
  } else {
    return <></>;
  }
}

export default ListBartender;
