import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';

const Login = (props) => {
  console.log(props)
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <SafeAreaView>
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
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('Map')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;