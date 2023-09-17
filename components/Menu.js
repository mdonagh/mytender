import React, { useCallback, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { ListItem } from '@rneui/themed';
import * as SecureStore from 'expo-secure-store';

const Menu = () => {
  const navigation = useNavigation();
  const [role, setRole] = React.useState(false);

  const getBartender = useCallback(async () => {
    const _role = await SecureStore.getItemAsync('role');
    setRole(_role);
  }, []);

  useEffect(() => {
    getBartender()
      // make sure to catch any error
      .catch(console.error);
  }, [getBartender]);

  return (
    <>
      {role && role == 'bartender' ? (
        <ListItem
          onPress={() => navigation.navigate('Enter Shift')}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title>Enter Work Schedule</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ) : (
        <></>
      )}

      {role && role == 'bartender' ? (
        <ListItem
          onPress={() => navigation.navigate('My Shifts')}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title>My Shifts</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ) : (
        <></>
      )}

      {role && role == 'bartender' ? (
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('Add Photos')}
        >
          <ListItem.Content>
            <ListItem.Title>Add Photos</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ) : (
        <></>
      )}

      {role && role == 'drinker' ? (
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('Account Settings')}
        >
          <ListItem.Content>
            <ListItem.Title>Account Settings</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ) : (
        <></>
      )}
    </>
  );
};

export default Menu;
