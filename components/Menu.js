import React, { useEffect, useCallback } from 'react';

import { 
         Pressable,
       } from "react-native";

import { ListItem } from '@rneui/themed';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  const [role, setRole] = React.useState(false);

  const getBartender = useCallback(async () => {
    const _role = await SecureStore.getItemAsync('role');
    setRole(_role);
  }, [])

  useEffect(() => {
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [getBartender])

    return (
    <>
      <ListItem onPress={() => navigation.navigate('Map')} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>View Map</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      { role && role == 'bartender' ?
      <ListItem onPress={() => navigation.navigate('Enter Shift')} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Enter Work Schedule</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      :
      <></>
      }

      { role && role == 'bartender' ?
      <ListItem onPress={() => navigation.navigate('My Shifts')} bottomDivider>
        <ListItem.Content >
            <ListItem.Title>My Shifts</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      :
      <></>
      }

      <ListItem bottomDivider onPress={() => navigation.navigate('List Bartenders')}>
        <ListItem.Content >
            <ListItem.Title>List Nearby Bartenders</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      { role && role == 'bartender' ?
      <ListItem bottomDivider onPress={() => navigation.navigate('Add Photos')}>
        <ListItem.Content>
          <ListItem.Title>Add Photos</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      :
      <></>
      }

      {/* <ListItem> */}
      {/*   <ListItem.Content> */}
      {/*     <ListItem.Title>Edit Profile</ListItem.Title> */}
      {/*   </ListItem.Content> */}
      {/* </ListItem> */}
    </>
    );
}

export default Menu;
