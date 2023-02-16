import React from 'react';

import { 
         Pressable,
         View,
       } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';

import { ListItem, Avatar } from '@rneui/themed';

class Schedule extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Text>I know this page sucks... Redo later</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>

        <View style={{flex: 1}} ></View>
        <View style={{flex: 1}} >
        <Button
          onPress={() => this.props.navigation.navigate('One Time Schedule')}
          title={'This is a one-time shift'}
          containerStyle={{
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        />
        <Button
          onPress={() => this.props.navigation.navigate('Regular Schedule')}
          title="This is my regular shift"
          buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
          containerStyle={{
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          titleStyle={{ color: 'white', marginHorizontal: 20 }}
        />
        </View>
        <View style={{flex: 1}} />
        </View>
      </>
    );
}
}

export default Schedule;
