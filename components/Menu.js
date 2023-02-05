import React from 'react';

import { 
         Pressable,
       } from "react-native";

import { ListItem } from '@rneui/themed';

class Menu extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <>
      <ListItem onPress={() => this.props.navigation.navigate('Schedule')} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Share Work Schedule</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => this.props.navigation.navigate('List Bartenders')}>
        <ListItem.Content >
            <ListItem.Title>List Nearby Bartenders</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>Edit Profile</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </>
    );
}
}

export default Menu;
