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
      <ListItem onPress={() => this.props.navigation.navigate('Map')} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>View Map</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem onPress={() => this.props.navigation.navigate('Enter Shift')} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Enter Work Schedule</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => this.props.navigation.navigate('My Shifts')}>
        <ListItem.Content >
            <ListItem.Title>My Shifts</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => this.props.navigation.navigate('List Bartenders')}>
        <ListItem.Content >
            <ListItem.Title>List Nearby Bartenders</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => this.props.navigation.navigate('Add Photos')}>
        <ListItem.Content>
          <ListItem.Title>Add Photos</ListItem.Title>
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
