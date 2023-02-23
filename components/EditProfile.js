import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  View,} from 'react-native';


const EditProfile = (props) => {
  const [firstName, onChangeFirstName] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [phone, onChangePhone] = React.useState('');
  const [streetAddress1, onChangeStreetAddress1] = React.useState('');
  const [streetAddress2, onChangeStreetAddress2] = React.useState('');
  const [city, onChangeCity] = React.useState('');
  const [state, onChangeState] = React.useState('');
  const [zipCode, onChangeZipCode] = React.useState('');
  const [birthDate, onChangeBirthDate] = React.useState('');

  return (
    <View style={styles.container}>
    <ScrollView>
    <TextInput
        style={styles.input}
        onChangeText={onChangeFirstName}
        placeholder="First Name"
        value={firstName}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeLastName}
        secureTextEntry={true}
        placeholder="Last Name"
        value={lastName}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        secureTextEntry={true}
        placeholder="Email"
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePhone}
        secureTextEntry={true}
        placeholder="Phone"
        value={phone}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeStreetAddress1}
        secureTextEntry={true}
        placeholder="Street Address 1"
        value={streetAddress1}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeStreetAddress2}
        secureTextEntry={true}
        placeholder="Street Address 2"
        value={streetAddress2}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeCity}
        secureTextEntry={true}
        placeholder="City"
        value={city}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeState}
        secureTextEntry={true}
        placeholder="State"
        value={state}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeZipCode}
        secureTextEntry={true}
        placeholder="Zip Code"
        value={zipCode}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeBirthDate}
        secureTextEntry={true}
        placeholder="Birthdate"
        value={birthDate}
      />
      <View style={styles.button} >
      <Button
        title="Submit"
        onPress={() => props.navigation.navigate('Map')}
      />
      </View>
    </ScrollView>  
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