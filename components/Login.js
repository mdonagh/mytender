import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';

const Login = () => {
  const [email, onChangeEmail] = React.useState('hello@bartender.com');
  const [password, onChangePassword] = React.useState('');

  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={email}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Map')}
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