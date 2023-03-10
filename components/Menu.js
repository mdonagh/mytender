import React from 'react';

import { ListItem } from '@rneui/themed';

class Menu extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <>
      <ListItem onPress={() => this.props.navigation.navigate('Enter Shift')} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Enter Work Schedule</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => this.props.navigation.navigate('List Shifts')}>
        <ListItem.Content >
            <ListItem.Title>List Shifts</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => this.props.navigation.navigate('List Bartenders')}>
        <ListItem.Content >
            <ListItem.Title>List Nearby Bartenders</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => this.props.navigation.navigate('Edit Profile')}>
        <ListItem.Content>
          <ListItem.Title>Edit Profile</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </>
    );
}
}

export default Menu;
