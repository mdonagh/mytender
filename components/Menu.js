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
      <ListItem bottomDivider>
        <ListItem.Content>
          <Pressable onPress={() => this.props.navigation.navigate('Schedule')} >
          <ListItem.Title>Share Work Schedule</ListItem.Title>
        </Pressable>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <Pressable onPress={() => this.props.navigation.navigate('ListBartender')} >
            <ListItem.Title>List Nearby Bartenders</ListItem.Title>
          </Pressable>
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
