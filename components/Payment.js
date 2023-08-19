import React, { useState, useEffect } from "react";

import { useStripe, presentPaymentSheet } from '@stripe/stripe-react-native';

import { View,
         Button,
         ImageBackground,
         StyleSheet,
         Alert,
       } from "react-native";

import * as SecureStore from 'expo-secure-store';
import BarBackground from '../assets/black-white-bar.jpg'

export default function Payment() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    let token = await SecureStore.getItemAsync('token');
    const response = await fetch("https://03c9-24-17-149-35.ngrok.io/payment-sheet", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Authorization: `Basic ${token}`
      },
    });

    const { paymentIntent, ephemeralKey, customer, publishableKey} = await response.json();

    console.log({ paymentIntent, ephemeralKey, customer, publishableKey});
    return {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
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
      style={styles.image}>
    <View style={{backgroundColor: 'white', margin: 10, borderRadius: 40, overflow: 'hidden'}}>
    <Button
      title="Add Payment"
      style={styles.text}
      disabled={!loading}
      onPress={openPaymentSheet}
    />
    </View>
    </ImageBackground>
  </View>
  )
}