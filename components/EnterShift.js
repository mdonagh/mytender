import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet, ImageBackground } from "react-native";
import { Text } from '@rneui/themed';
import { CheckBox, Separator } from "react-native-btr";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import GooglePlacesInput from "./GooglePlacesInput";
import {Picker} from '@react-native-picker/picker';

import { RadioGroup } from "react-native-btr";

import { Button as ThemeButton } from '@rneui/themed';


class EnterShift extends React.Component {
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

  let radioButtonsVertical = [
                      {
                        id: "1",
                        label: "I don't normally work at this time",
                        layout: "column",
                      },
                      {
                        id: "2",
                        label: "This is when I normally work",
                        selected: true,
                        color: "#f84",
                        layout: "column",
                      }]
  if(this.state.currentForm == 0){
    form = (
          <>
          <Text style={styles.text}>Where are you bartending?</Text>
            <View style={{backgroundColor: 'grey', height: 200, width: "100%", padding: 30}}>
              {/* need to pass method as props to this component to pass state up */}
              <GooglePlacesInput />
            </View>
          </>
          )
    }
    else if(this.state.currentForm == 1) {
      form = (
          <DateTimePickerModal
            isVisible={this.state.currentForm == 1}
            mode="date"
            onConfirm={this.handleDateConfirm}
            onCancel={this.pageBack}
          />
        )
    }
    else if(this.state.currentForm == 2) {
      form = (
          <DateTimePickerModal
            isVisible={this.state.currentForm == 2}
            mode="time"
            onConfirm={this.handleTimeConfirm}
            onCancel={this.pageBack}
          />
        )
  }
    else if(this.state.currentForm == 3) {
      form = (
          <>
          <Text style={styles.text}>How many hours is your shift?</Text>
          <Picker
            selectedValue={this.state.selectedValue}
            style={{ height: 300, width: "100%" }}
            onValueChange={(itemValue, itemIndex) => this.selectHours(itemValue)}
          >
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
          </Picker>
          </>
        )
  }
  if(this.state.currentForm == 4){
    form = (
          <>
          <Text style={styles.text}>Is this your regular shift?</Text>
            <View style={{backgroundColor: 'white', height: 200, width: "100%", padding: 30}}>
            <RadioGroup
              radioButtons={radioButtonsVertical}
              onPress={this.setRadioButtonsVertical}
            />
            </View>
          </>
          )
    }
  if(this.state.currentForm == 5){
      return this.props.navigation.reset({
        index: 2,
        routes: [{ name: 'Map' }, { name: 'Menu' }, { name: 'List Shifts' }],
      });
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

export default EnterShift;