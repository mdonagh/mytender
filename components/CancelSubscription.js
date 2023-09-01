import React, { useState } from 'react';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { CANCEL_SUBSCRIPTION } from '../gql/cancelSubscription';

const CancelSubscription = () => {
  const [reason, setReason] = useState(null);

  const [cancelSubscription, { data, loading, error }] =
    useMutation(CANCEL_SUBSCRIPTION);

  const navigation = useNavigation();

  const cancel = () => {
    cancelSubscription({
      variables: {
        reason: reason,
      },
    })
      .then((result) => {
        Toast.show({
          type: 'success',
          text1: 'Your subscription has been cancelled!',
        });
      })
      .catch((error) => {
        console.log('An error', error);
      });
  };

  return (
    <>
      <View style={{ backgroundColor: 'grey' }}>
        <Text style={styles.whiteText}>Reason for cancelling</Text>
      </View>
      <TextInput
        multiline={true}
        style={styles.textarea}
        numberOfLines={4}
        onChangeText={(text) => setReason(text)}
      />
      <View style={styles.button}>
        <Button title="Cancel" onPress={() => cancel()} disabled={!reason} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  textarea: {
    height: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    marginHorizontal: 50,
    marginTop: 20,
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
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CancelSubscription;
