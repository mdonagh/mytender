import React, { useEffect } from 'react';
import {SafeAreaView,
        StyleSheet,
        TextInput,
        Button,
        View,
        Image,
        FlatList,
        Pressable,
        Text,
        ImageBackground} from 'react-native';
import Bartender from '../assets/bartender2.png'
import Logo from '../assets/logo.png'

import * as SecureStore from 'expo-secure-store';

import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../gql/signIn";

const Login = (props) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const [signIn, { data, loading, error }] = useMutation(SIGN_IN);

const loginUser = () => {
  signIn({variables: {email: email, password: password}}).catch(error => console.log("An error", error));
 }

useEffect(() => {
  if (data){
    SecureStore.setItemAsync('token', data["signInUser"]["token"]);
    props.navigation.navigate('Map')
  }
})

if (loading) return <Text>'Loading...'</Text>;
if (error){
  console.log(error)
}

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Bartender}
        resizeMode="cover"
        style={styles.image}>
      <Image source={Logo} style={{height: 250, width: 400}} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="email"
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        placeholder="password"
        value={password}
      />
      <View style={styles.button} >
      <Button
        title="Login"
        onPress={() => loginUser()}
      />
      </View>
      </ImageBackground>
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

export default Login;