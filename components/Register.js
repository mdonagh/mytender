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
import Bartender from '../assets/bartender2.jpg'
import Logo from '../assets/logo.jpg'

import * as SecureStore from 'expo-secure-store';

import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../gql/createUser";

import { withApollo } from '@apollo/client/react/hoc';
import Toast from 'react-native-toast-message';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentForm: 'start',
                   instagram: '',
                   cashapp: '',
                   venmo: '' };
  }

  createUser = () => {
      this.props.client.mutate({
        mutation: CREATE_USER,
        variables: {
          email: this.state.email,
          password: this.state.password,
          kind: this.state.kind,
          description: this.state.description,
          venmo: this.state.venmo,
          cashapp: this.state.cashapp,
          instagram: this.state.instagram,
        },
      })
      .then(response => {
        SecureStore.setItemAsync('token', response["data"]["createUser"]["token"]);
        SecureStore.setItemAsync('role', response["data"]["createUser"]["user"]["kind"]);

        if(this.state.kind == "DRINKER"){
          this.props.navigation.reset({
            index: 2,
            routes: [{ name: 'Payment' }],
          });
        } else {
          this.props.navigation.reset({
            index: 2,
            routes: [{ name: 'Menu' }],
          });
        }
      })
      .catch(error => {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: error.message,
        });
      });
  }

  render(){
    const styles = StyleSheet.create({
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
      },
      textarea: {
        height: 70,
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
      whiteText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30
      },
      container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
    });

  let form;

  if(this.state.currentForm == 'start'){
    form = (
          <>
            <Text style={styles.whiteText}>mybartender is an app where bartenders can let their regulars know where they're working and what's going on at their bar.</Text>
            <View style={styles.button} >
            <Button
              title="I'm a bartender"
              onPress={() => this.setState({ kind: 'BARTENDER', currentForm: 'bartender1' })}
            />
            </View>
            <View style={styles.button} >
            <Button
              title="I'm a drinker"
              onPress={() => this.setState({ kind: 'DRINKER', currentForm: 'drinker1' })}
            />
            </View>
          </>
          )
    }
    else if(this.state.currentForm == 'bartender1') {
      form = (
        <>
          <Text style={styles.whiteText}>Sharing your work schedule in mybartender will help you to build relationships with your regulars, pack your bar, and make more money!.</Text>
            <View style={styles.button} >
            <Button
              title="Next"
              onPress={() => this.setState({ currentForm: 'bartender2' })}
            />
            </View>
            <View style={styles.button} >
            <Button
              title="Back"
              onPress={() => this.setState({ currentForm: 'start' })}
            />
            </View>
        </>
      )
    }
    else if(this.state.currentForm == 'bartender2') {
      form = (
        <>
          <Text style={styles.whiteText}>Get private tips through cash apps and share your instagram</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ instagram: text })}
                placeholder="instagram ID (optional)"
                value={this.state.instagram}/>
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ venmo: text })}
                placeholder="venmo ID (optional)"
                value={this.state.venmo}/>
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ cashapp: text })}
                placeholder="cashapp ID (optional)"
                value={this.state.cashapp}/>
            <View style={styles.button} >
            <Button
              title="Next"
              onPress={() => this.setState({ currentForm: 'bartender3' })}
            />
            </View>
            <View style={styles.button} >
            <Button
              title="Back"
              onPress={() => this.setState({ currentForm: 'start' })}
            />
            </View>
        </>
      )
    }
    else if(this.state.currentForm == 'bartender3') {
      form = (
        <>
          <Text style={styles.whiteText}>About you - this will be shown to people viewing your profile</Text>
            <TextInput
                multiline={true}
                style={styles.textarea}
                numberOfLines={4}
                onChangeText={(text) => this.setState({ description: text })}
                value={this.state.aboutMe}/>
            <View style={styles.button} >
            <Button
              title="Next"
              onPress={() => this.setState({ currentForm: 'register' })}
            />
            </View>
            <View style={styles.button} >
            <Button
              title="Back"
              onPress={() => this.setState({ currentForm: 'bartender2' })}
            />
            </View>
        </>
      )
    }
    else if(this.state.currentForm == 'register') {
      form = (
      <>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ email: text })}
          placeholder="email"
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ password: text })}
          secureTextEntry={true}
          placeholder="password"
          value={this.state.password}
        />
        <View style={styles.button} >
        <Button
          title="Register"
          onPress={() => this.createUser()}
        />
        </View>
      </>
      )
    }
    else if(this.state.currentForm == 'drinker1') {
      form = (
        <>
          <Text style={styles.whiteText}>mybartender will show you who's working and the best places to go out.</Text>
            <View style={styles.button} >
            <Button
              title="Next"
              onPress={() => this.setState({ currentForm: 'register' })}
            />
            </View>
            <View style={styles.button} >
            <Button
              title="Back"
              onPress={() => this.setState({ currentForm: 'start' })}
            />
            </View>
        </>
      )
    }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Bartender}
        resizeMode="cover"
        style={styles.image}>
        {form}
      </ImageBackground>
    </View>
  );
}
};

export default withApollo(Register);
