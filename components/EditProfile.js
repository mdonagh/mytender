import React from 'react';
import {SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,} from 'react-native';

import { ListItem, Avatar } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';

import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const EditProfile = (props) => {
  const [firstName, onChangeEmail] = React.useState('');
  const [lastName, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="firstName"
        value={firstName}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        placeholder="lastName"
        value={lastName}
      />
      <View style={styles.button} >
      <Button
        title="Submit"
        onPress={() => props.navigation.navigate('Map')}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  button: {
    marginHorizontal: 50,
    marginTop: 20,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default EditProfile;