import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet, ImageBackground } from "react-native";
import { Text } from '@rneui/themed';
import { CheckBox, Separator } from "react-native-btr";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import GooglePlacesInput from "./GooglePlacesInput";
import {Picker} from '@react-native-picker/picker';

import { RadioGroup } from "react-native-btr";

import { Button as ThemeButton } from '@rneui/themed';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 0,
      firstName: ''
    
    };
  }
  

  pageForward = () => {
    const newState = this.state.currentForm + 1;
    this.setState({ currentForm: newState })
  }

  pageBack = () => {
    const newState = this.state.currentForm - 1;
    this.setState({ currentForm: newState })
  }

render(){
  let form;

  let radioButtonsVertical = [
    {
      id: "1",
      label: "Bartender",
      selected: true,
      layout: "column",
    },
    {
      id: "2",
      label: "Drinker",
      color: "#f84",
      layout: "column",
    }]

  if(this.state.currentForm == 0){
    form = (
      <>
        <Text style={styles.text}>Who are you?</Text>
        <View style={{backgroundColor: 'white', height: 200, width: "100%", padding: 30}}>
          <RadioGroup
            radioButtons={radioButtonsVertical}
            onPress={this.setRadioButtonsVertical}
          />
        </View>
      </>
          )
    }
    else if(this.state.currentForm == 1) {
      form = (
        <>
        <Text style={styles.text}>First Time User? Please Register</Text>
          <View style={{backgroundColor: '#cccccc', height: 300, width: "100%", padding: 30}}>
            <TextInput 
              placeholder="first name"
              placeholderTextColor="#909090"
              textAlign={'center'} 
              onChangeText={(firstName) => this.setState({firstName})}
              stye={styles.input}
              value={this.state.firstName}
            />
            <TextInput 
              placeholder="last name"
              placeholderTextColor="#909090"
              textAlign={'center'} 
              onChangeText={(lastName) => this.setState({lastName})}
              stye={styles.input}
              value={this.state.lastName}
            />
            <TextInput 
              placeholder="email"
              placeholderTextColor="#909090"
              textAlign={'center'} 
              onChangeText={(email) => this.setState({email})}
              stye={styles.input}
              value={this.state.email}
            />
            <TextInput 
              placeholder="password"
              placeholderTextColor="#909090"
              textAlign={'center'} 
              onChangeText={(password) => this.setState({password})}
              stye={styles.input}
              value={this.state.password}
            />
            <TextInput 
              placeholder="password confirmation"
              placeholderTextColor="#909090"
              textAlign={'center'} 
              onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
              stye={styles.input}
              value={this.state.passwordConfirmation}
            />
          </View>
        </>
        )
    }
    else if(this.state.currentForm == 2) {
      form = (
        <Text style={styles.text}>You are at currentForm 2!</Text>
      )
    }
    else if(this.state.currentForm == 3) {
      form = (
        <Text style={styles.text}>You are at currentForm 3!</Text>
      )
    }
    if(this.state.currentForm == 4){
      form = (
        <Text style={styles.text}>You are at currentForm 4!</Text>
      )
      }
    if(this.state.currentForm == 5){
      form = (
        <Text style={styles.text}>You are at currentForm 5!</Text>
      )
      }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={{uri: 'https://cdn.pixabay.com/photo/2014/10/22/17/50/bar-498420_1280.jpg'}}
          resizeMode="cover"
          style={styles.image}>
        <View style={{backgroundColor: 'white', margin: 10, borderRadius: 40, overflow: 'hidden'}}>
        {form}
        <Button
          title="Next"
          onPress={this.pageForward}
        />
        </View>
        </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    lineHeight: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
  },
});

export default SignUp;