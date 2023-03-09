import React from 'react';
import {SafeAreaView,
        StyleSheet,
        TextInput,
        Button,
        View,
        Image,
        ImageBackground} from 'react-native';
import Bartender from '../assets/bartender2.png'
import Logo from '../assets/logo.png'

const Login = (props) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

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
      <View style={styles.loginButton} >
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('Map')}
      />
      </View>
      <View style={styles.signupButton} >
      <Button
        title="SignUp"
        onPress={() => props.navigation.navigate('SignUp')}
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
  loginButton: {
    marginHorizontal: 50,
    marginTop: 20,
    backgroundColor: 'white'
  },
  signupButton: {
    marginHorizontal: 50,
    marginTop: 20,
    backgroundColor: 'white',
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