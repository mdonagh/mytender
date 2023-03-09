import React from 'react';
import {StyleSheet,
        Text,
        View,
        ImageBackground,
        Button
} from 'react-native';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        currentForm: 0
      };
  }

  pageForward = () => {
    const newState = this.state.currentForm + 1;
    this.setState({ currentForm: newState})
  }

  pageBack = () => {
    const newState = this.state.currentForm - 1;
    this.setState({ currentform: newState })
  }

  render () {
    let form;

    if(this.state.currentForm == 0) {
      form = (
        <>
          <Text>Test this form</Text>
            <View style={{backGroundColor: 'grey', height: 200, width: "100%", padding: 30}}></View>
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
        style={styles.text}
        onPress={this.pageForward}
      />
      </View>
      </ImageBackground>
    </View>
    )
  }
}

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