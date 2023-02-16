import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {Picker} from '@react-native-picker/picker';

const RegularSchedule = () => {
const [selectedDay, setSelectedDay] = useState();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });

  return (
    <View>
      <Picker
        selectedValue={selectedDay}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedDay(itemValue)
        }>
        <Picker.Item label="Sunday" value="sunday" />
        <Picker.Item label="Monday" value="monday" />
        <Picker.Item label="Tuesday" value="tuesday" />
        <Picker.Item label="Wednesday" value="wednesday" />
        <Picker.Item label="Thursday" value="thursday" />
        <Picker.Item label="Friday" value="friday" />
        <Picker.Item label="Saturday" value="saturday" />
      </Picker>
    </View>
  )
}

export default RegularSchedule;