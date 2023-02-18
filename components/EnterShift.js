import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet } from "react-native";
import { Text } from '@rneui/themed';
import { CheckBox, Separator } from "react-native-btr";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import GooglePlacesInput from "./GooglePlacesInput";

const EnterShift = (props) => {
  // Date Picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  // Time Picker
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (Time) => {
    console.warn("A Time has been picked: ", Time);
    hideTimePicker();
  };

  const [notes, onChangeNotes] = React.useState('');

  const [isSelected, setSelection] = useState(false);

  function toggle() {
    setSelection(!isSelected)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
    <View style={{flex: 1}}>
      <GooglePlacesInput />
    </View>
      <View style={{flex: 1}}>
      <TextInput
        style={styles.input}
        numberOfLines={4}
        onChangeText={onChangeNotes}
        placeholder="Half off buffalo wings!"
        value={notes}
        multiline={true}
        textAlignVertical='top'
      />
      </View>
      <View style={{flex: 1}}>
        <Button title="Enter Date" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    <View style={{flex: 1}}>
      <Button title="Enter Time" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
    <View style={{flex: 1}}>
    <View style={styles.row}>
      <CheckBox
        checked={isSelected}
        onPress={() => toggle()}
      />
      <Text style={styles.label}>Same shift each week?</Text>
    </View>
    </View>
    <View style={{flex: 1}}>
      <Button
        title="Confirm"
        onPress={() => props.navigation.navigate('Map')}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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