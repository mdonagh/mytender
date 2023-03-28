import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet, ImageBackground } from "react-native";
import { Text } from '@rneui/themed';

import { RadioGroup } from "react-native-btr";

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

  setRadioButtonsVertical = (data) => {
    console.log(data);
  };

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
        <View style={{
                      backgroundColor: 'white', 
                      height: 200, 
                      width: "100%", 
                      padding: 30,
                      }}>
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
        <Text style={styles.text}>Tell us your who you are</Text>
          <View style={{backgroundColor: '#cccccc', 
                        height: 200, 
                        width: "100%", 
                        padding: 30,
                        justifyContent: 'center',
                        }}>
            <TextInput 
              placeholder="first name"
              placeholderTextColor="#909090"
              textAlign={'center'} 
              onChangeText={(firstName) => this.setState({firstName})}
              style={styles.input}
              value={this.state.firstName}
            />
            <TextInput 
              placeholder="last name"
              placeholderTextColor="#909090"
              textAlign={'center'} 
              onChangeText={(lastName) => this.setState({lastName})}
              style={styles.input}
              value={this.state.lastName}
            />
          </View>
        </>
        )
    }
    else if(this.state.currentForm == 2) {
      form = (
        <>
        <Text style={styles.text}>Email and Password</Text>
          <View style={{backgroundColor: '#cccccc', 
                        height: 200, 
                        width: "100%", 
                        padding: 30,
                        justifyContent: 'center',
                        }}>
            <TextInput 
              placeholder="email"
              placeholderTextColor="#909090"
              textAlign={'center'} 
              onChangeText={(firstName) => this.setState({email})}
              style={styles.input}
              value={this.state.email}
            />
            <TextInput 
              placeholder="password"
              placeholderTextColor="#909090"
              textAlign={'center'} 
              onChangeText={(lastName) => this.setState({password})}
              style={styles.input}
              value={this.state.password}
            />
            <TextInput 
              placeholder="confirmPassword"
              placeholderTextColor="#909090"
              textAlign={'center'} 
              onChangeText={(lastName) => this.setState({confirmPassword})}
              style={styles.input}
              value={this.state.confirmPassword}
            />
          </View>
        </>
      )
    }
    else if(this.state.currentForm == 3) {
      form = (
        <>
        <Text style={styles.text}>Tell us your who you are</Text>
          <View style={{backgroundColor: '#cccccc', 
                        height: 200, 
                        width: "100%", 
                        padding: 30,
                        justifyContent: 'center',
                        }}>
          </View>
        </>
      )
    }
    if(this.state.currentForm == 4){
      form = (
        <>
        <Text style={styles.text}>Provide photo for your banner</Text>
          <View style={{backgroundColor: '#cccccc', 
                        height: 200, 
                        width: "100%", 
                        padding: 30,
                        justifyContent: 'center',
                        }}>
            
          </View>
        </>
      )
      }
    if(this.state.currentForm == 5){
      form = (
        <>
        <Text style={styles.text}>Start a shift!</Text>
          <View style={{backgroundColor: '#cccccc', 
                          height: 200, 
                          width: "100%", 
                          padding: 30,
                          justifyContent: 'center',
                          }}>
              
            </View>
        </>
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
input: {
  borderWidth: 1,
  height: 40,
  marginBottom: 10,
  borderRadius: 40,
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