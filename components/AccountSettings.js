import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { ListItem } from '@rneui/themed';

const AccountSettings = () => {
  const navigation = useNavigation();

  return (
    <>
      <ListItem
        onPress={() => navigation.navigate('Cancel Subscription')}
        bottomDivider
      >
        <ListItem.Content>
          <ListItem.Title>Cancel Subscription</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </>
  );
};

export default AccountSettings;
