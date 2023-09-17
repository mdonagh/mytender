import { withApollo } from '@apollo/client/react/hoc';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Appbar, Button, Text, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import Bartender from '../../assets/bartender2.png';
import { CREATE_USER } from '../../gql/createUser';
import RegisterCard from './components/RegisterCard';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 'start',
      instagram: '',
      cashapp: '',
      venmo: '',
    };
  }

  createUser = () => {
    this.props.client
      .mutate({
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
      .then((response) => {
        SecureStore.setItemAsync(
          'token',
          response['data']['createUser']['token'],
        );
        SecureStore.setItemAsync(
          'role',
          response['data']['createUser']['user']['kind'],
        );

        if (this.state.kind == 'DRINKER') {
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
      .catch((error) => {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: error.message,
        });
      });
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const styles = StyleSheet.create({
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
      },
      button: {
        marginHorizontal: 50,
        marginTop: 20,
      },
      textarea: {
        height: 70,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
      },
      whiteText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30,
      },
      container: {
        flex: 1,
      },
      background: {
        flex: 1,
        justifyContent: 'center',
      },
      overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '100%',
        height: '100%',
      },
    });

    let form;

    if (this.state.currentForm == 'start') {
      form = (
        <>
          <RegisterCard
            description={
              "MyTender is an app where bartenders can let their regulars know where they're working and what's going on at their bar."
            }
            buttons={
              <>
                <Button
                  onPress={() =>
                    this.setState({
                      kind: 'DRINKER',
                      currentForm: 'drinker1',
                    })
                  }
                  mode="contained"
                >
                  I'm a drinker
                </Button>
                <Button
                  onPress={() =>
                    this.setState({
                      kind: 'BARTENDER',
                      currentForm: 'bartender1',
                    })
                  }
                  mode="contained-tonal"
                >
                  I'm a bartender
                </Button>
              </>
            }
          />
        </>
      );
    } else if (this.state.currentForm == 'bartender1') {
      form = (
        <>
          <RegisterCard
            description={
              'Sharing your work schedule in MyTender will help you to build relationships with your regulars, pack your bar, and make more money!.'
            }
            buttons={
              <>
                <Button
                  mode="contained"
                  onPress={() => this.setState({ currentForm: 'bartender2' })}
                >
                  Next
                </Button>
                <Button
                  mode="contained-tonal"
                  onPress={() => this.setState({ currentForm: 'start' })}
                >
                  Back
                </Button>
              </>
            }
          />
        </>
      );
    } else if (this.state.currentForm == 'bartender2') {
      form = (
        <>
          <RegisterCard
            description={
              'Get private tips through cash apps and share your instagram'
            }
            inputs={
              <>
                <TextInput
                  onChangeText={(text) => this.setState({ instagram: text })}
                  label="instagram ID (optional)"
                  value={this.state.instagram}
                />
                <TextInput
                  onChangeText={(text) => this.setState({ venmo: text })}
                  label="venmo ID (optional)"
                  value={this.state.venmo}
                />
                <TextInput
                  onChangeText={(text) => this.setState({ cashapp: text })}
                  label="cashapp ID (optional)"
                  value={this.state.cashapp}
                />
              </>
            }
            buttons={
              <>
                <Button
                  mode="contained"
                  onPress={() => this.setState({ currentForm: 'bartender3' })}
                >
                  Next
                </Button>
                <Button
                  mode="contained-tonal"
                  onPress={() => this.setState({ currentForm: 'start' })}
                >
                  Back
                </Button>
              </>
            }
          />
        </>
      );
    } else if (this.state.currentForm == 'bartender3') {
      form = (
        <>
          <RegisterCard
            description={
              'About you - this will be shown to people viewing your profile'
            }
            inputs={
              <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => this.setState({ description: text })}
                value={this.state.aboutMe}
              />
            }
            buttons={
              <>
                <Button
                  mode="contained"
                  onPress={() => this.setState({ currentForm: 'register' })}
                >
                  Next
                </Button>
                <Button
                  mode="contained-tonal"
                  onPress={() => this.setState({ currentForm: 'bartender2' })}
                >
                  Back
                </Button>
              </>
            }
          />
        </>
      );
    } else if (this.state.currentForm == 'register') {
      form = (
        <>
          <RegisterCard
            description={'Enter your email and password to create an account'}
            inputs={
              <>
                <TextInput
                  onChangeText={(text) => this.setState({ email: text })}
                  label="email"
                  value={this.state.email}
                />
                <TextInput
                  onChangeText={(text) => this.setState({ password: text })}
                  secureTextEntry={true}
                  label="password"
                  value={this.state.password}
                />
              </>
            }
            buttons={
              <>
                <Button mode="contained" onPress={() => this.createUser()}>
                  Register
                </Button>
                <Button
                  mode="contained-tonal"
                  onPress={() =>
                    this.setState({
                      currentForm:
                        this.state.kind === 'DRINKER'
                          ? 'drinker1'
                          : 'bartender3',
                    })
                  }
                >
                  Back
                </Button>
              </>
            }
          />
        </>
      );
    } else if (this.state.currentForm == 'drinker1') {
      form = (
        <>
          <RegisterCard
            description={
              "MyTender will show you who's working and the best places to go out."
            }
            buttons={
              <>
                <Button
                  mode="contained"
                  onPress={() => this.setState({ currentForm: 'register' })}
                >
                  Next
                </Button>
                <Button
                  mode="contained-tonal"
                  onPress={() => this.setState({ currentForm: 'start' })}
                >
                  Back
                </Button>
              </>
            }
          />
        </>
      );
    }

    return (
      <>
        <Appbar.Header>
          <Appbar.BackAction onPress={this.goBack} />
          <Appbar.Content title="Register" />
        </Appbar.Header>

        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.container}>
            <ImageBackground
              source={Bartender}
              resizeMode="cover"
              style={styles.background}
              blurRadius={5}
            >
              <View style={styles.overlay} />

              {form}
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

export default withApollo(Register);
