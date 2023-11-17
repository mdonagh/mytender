import { Picker } from '@react-native-picker/picker';
import { Text } from '@rneui/themed';
import React, { useEffect } from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import GooglePlacesInput from './GooglePlacesInput';

import { CREATE_SHIFT } from '../gql/createShift';

import { withApollo } from '@apollo/client/react/hoc';

import Toast from 'react-native-toast-message';
import BarBackground from '../assets/black-white-bar.png';

const LeavePage = (props) => {
  useEffect(() => {
    props.navigation.reset({
      index: 2,
      routes: [{ name: 'Map' }, { name: 'Menu' }, { name: 'My Shifts' }],
    });
  }, []);
  return <></>;
};

class EnterShift extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentForm: 0, notes: '', hours: '8' };
  }

  regularShift = () => {
    this.setState({ regularShift: true });
    this.pageForward();
  };

  specialShift = () => {
    this.setState({ regularShift: false });
    this.pageForward();
  };

  handleDateConfirm = (date) => {
    this.pageForward();
  };
  handleDateTimeConfirm = (time) => {
    this.setState({ startTime: time });
    this.pageForward();
  };

  selectHours = (hours) => {
    console.log('hours');
    console.log(hours);

    this.setState({ hours: hours });
  };

  selectLocation = (location) => {
    this.setState({ location: location });
  };

  pageForward = () => {
    const newState = this.state.currentForm + 1;
    this.setState({ currentForm: newState });
  };

  pageBack = () => {
    const newState = this.state.currentForm - 1;
    this.setState({ currentForm: newState });
  };

  render() {
    let form;

    console.log(this.state);
    let radioButtonsVertical = [
      {
        id: '1',
        label: "I don't normally work at this time",
        layout: 'column',
      },
      {
        id: '2',
        label: 'This is when I normally work',
        selected: true,
        color: '#f84',
        layout: 'column',
      },
    ];
    if (this.state.currentForm == 0) {
      form = (
        <>
          <Text style={styles.text}>Where are you bartending?</Text>
          <View
            style={{
              backgroundColor: 'grey',
              height: 200,
              width: '100%',
              padding: 30,
            }}
          >
            {/* need to pass method as props to this component to pass state up */}
            <GooglePlacesInput selectLocation={this.selectLocation} />
          </View>
        </>
      );
    } else if (this.state.currentForm == 1) {
      form = (
        <DateTimePickerModal
          isVisible={this.state.currentForm == 1}
          mode="date"
          onConfirm={this.handleDateConfirm}
          onCancel={this.pageBack}
        />
      );
    } else if (this.state.currentForm == 2) {
      form = (
        <DateTimePickerModal
          isVisible={this.state.currentForm == 2}
          mode="time"
          onConfirm={this.handleDateTimeConfirm}
          onCancel={this.pageBack}
        />
      );
    } else if (this.state.currentForm == 3) {
      form = (
        <>
          <Text style={styles.text}>How many hours is your shift?</Text>
          <Picker
            selectedValue={this.state.hours}
            style={{ height: 300, width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.selectHours(itemValue)
            }
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
      );
    } else if (this.state.currentForm == 4) {
      form = (
        <>
          <Text style={styles.text}>Any specials or events?</Text>
          <View
            style={{
              backgroundColor: 'grey',
              height: 200,
              width: '100%',
              padding: 30,
            }}
          >
            <TextInput
              multiline={true}
              style={{
                backgroundColor: 'white',
                height: 100,
                width: '100%',
                padding: 8,
              }}
              numberOfLines={4}
              placeholder="Beer Pong out back! Half off hot wings!"
              onChangeText={(text) => this.setState({ notes: text })}
              value={this.state.notes}
            />
          </View>
        </>
      );
    }
    if (this.state.currentForm == 5) {
      form = (
        <>
          <Text style={styles.text}>
            Will you have the same shift each week?
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              width: '100%',
              padding: 30,
            }}
          >
            <Button
              title="I don't normally work at this time"
              onPress={this.specialShift}
            />
            <Button
              title="This is when I normally work"
              onPress={this.regularShift}
            />
          </View>
        </>
      );
    }
    if (this.state.currentForm == 6) {
      console.log(this.state);
      this.props.client
        .mutate({
          mutation: CREATE_SHIFT,
          variables: {
            notes: this.state.notes,
            barName: this.state.location['barName'],
            address: this.state.location['address'],
            duration: parseInt(this.state.hours),
            latitude: this.state.location['latitude'],
            longitude: this.state.location['longitude'],
            startTime: this.state.startTime,
            recurring: this.state.regularShift,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          Toast.show({
            type: 'error',
            text1: error.message,
          });
        });
      return <LeavePage navigation={this.props.navigation} />;
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={BarBackground}
          resizeMode="cover"
          style={styles.image}
        >
          <View
            style={{
              backgroundColor: 'white',
              margin: 10,
              borderRadius: 40,
              overflow: 'hidden',
            }}
          >
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    lineHeight: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
  },
});

export default withApollo(EnterShift);
