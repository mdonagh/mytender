import React from 'react';
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

import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/continents";
// https://www.apollographql.com/docs/react/data/mutations/
const Login = (props) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const { data, loading } = useQuery(CONTINENT_QUERY);

  const ContinentItem = ({ continent }) => {
    const { name, code } = continent; 
    return (
      <Pressable>
        <Text>{name}</Text>
      </Pressable>
    );
  };

  if(!loading){
    return (
      <FlatList
        data={data.continents}
        renderItem={({ item }) => <ContinentItem continent={item} />}
        keyExtractor={(item, index) => index}
      />
      )
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
        onPress={() => props.navigation.navigate('Map')}
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