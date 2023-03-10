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
    this.state = {currentForm: 0,
                  selectedValue: '8',
                  sameShift: false
               };

  }
  handleDateConfirm = (date) => {
    console.log("A date has been picked: ", date);
    this.pageForward();
  };

  setRadioButtonsVertical = (data) => {
    console.log(data);
  };


  handleTimeConfirm = (time) => {
    console.log("A Time has been picked: ", time);
    this.pageForward();
  };

  toggleSameShift() {
    const newState = !this.state.sameShift;
    this.setState({ sameShift: newState })
  }

  selectHours = (hours) => {
    this.setState({ selectedValue: hours })
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

  if(this.state.currentForm == 0){
    form = (
          <>
          <Text style={styles.text}>First Time User? Please Register</Text>
            <View style={{backgroundColor: 'grey', height: 200, width: "100%", padding: 30}}>
              {/* need to pass method as props to this component to pass state up */}
              <GooglePlacesInput />
            </View>
          </>
          )
    }
    else if(this.state.currentForm == 1) {
      form = (
          <Text style={styles.text}>You are at currentForm 1!</Text>
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
          style={styles.text}
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
  textInput: {
    // color: 'white',
    fontSize: 42,
    lineHeight: 42,
    // fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  text: {
    // color: 'white',
    fontSize: 24,
    lineHeight: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 60,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
  row: {
    flexDirection: "row",
  },
  label: {
    flex: 1,
    paddingRight: 150,
    paddingLeft: 20,
  },
});

export default SignUp;