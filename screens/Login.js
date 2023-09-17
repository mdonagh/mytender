import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Appbar, Button, Card, Text, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import Bartender from '../assets/bartender2.png';
import { SIGN_IN } from '../gql/signIn';

const Login = () => {
  const navigation = useNavigation();

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const [signIn, { data, loading, error }] = useMutation(SIGN_IN);

  const loginUser = () => {
    console.log('loginUser');
    signIn({ variables: { email: email, password: password } })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: JSON.stringify(error),
        });
        console.log('An error', error);
      })
      .then((response) => {
        console.log('response', response);
      });
  };

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (data) {
      SecureStore.setItemAsync('token', data['signInUser']['token']);
      SecureStore.setItemAsync('role', data['signInUser']['user']['kind']);
      navigation.navigate('Dashboard');
    }
  });

  if (loading) return <Text>'Loading...'</Text>;
  if (error) {
    Toast.show({
      type: 'error',
      text1: error.message,
    });
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Login" />
      </Appbar.Header>

      <ImageBackground
        source={Bartender}
        resizeMode="cover"
        style={styles.background}
        blurRadius={5}
      >
        <View style={styles.overlay} />

        <View style={styles.card}>
          <Card>
            <Card.Content style={styles.content}>
              <TextInput
                onChangeText={onChangeEmail}
                label="email"
                value={email}
                keyboardType="email-address"
              />
              <TextInput
                onChangeText={onChangePassword}
                secureTextEntry={true}
                label="password"
                value={password}
              />

              <View style={{ height: 8 }} />

              <Button mode="contained" onPress={loginUser}>
                Login
              </Button>
            </Card.Content>
          </Card>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
  },
  card: {
    width: '80%',
  },
  content: {
    gap: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
