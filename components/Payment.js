import React, { useEffect, useState } from 'react';

import { useStripe } from '@stripe/stripe-react-native';

import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import Toast from 'react-native-toast-message';
import BarBackground from '../assets/bartender2.png';

export default function Payment() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchPaymentSheetParams = async () => {
    let token = await SecureStore.getItemAsync('token');
    const response = await fetch(
      'https://mytender-dc1b2d59a1a2.herokuapp.com/payment-sheet',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${token}`,
        },
      },
    );

    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: false,
      paymentMethodTypes: ['card'],
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Toast.show({
        type: 'error',
        text1: `Error code: ${error.code} ${error.message}`,
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Your order is confirmed!',
      });
      navigation.navigate('Map');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    whiteText: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 30,
    },
    text: {
      fontSize: 24,
      lineHeight: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'white',
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BarBackground}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.whiteText}>
          You're almost there! $6.99 after a one-month FREE trial
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 40,
            overflow: 'hidden',
          }}
        >
          <Button
            title="Add Payment"
            style={styles.text}
            disabled={!loading}
            onPress={openPaymentSheet}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
