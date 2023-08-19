import React, { useEffect, useCallback } from 'react';

import { 
         Pressable,
       } from "react-native";

import { ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const AccountSettings = () => {
  const navigation = useNavigation();

    return (
    <>
      <ListItem onPress={() => navigation.navigate('Cancel Subscription')} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Cancel Subscription</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </>
    );
}

export default AccountSettings;
