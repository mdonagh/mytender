import React, { useState } from 'react';

import { View,
         Text,
         Image,
         StyleSheet,
         Pressable,
         Linking,
         TouchableOpacity,
         Dimensions} from "react-native";

import VenmoIcon from '../../assets/venmo.jpg'
import CashAppIcon from '../../assets/cashapp.jpg'

function Payment(props) {
console.log(props);
console.log('in paymnet');
  const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    paymentButton: {
        flex: 1,
        width: 44,
        height: 96,
        resizeMode: 'contain'
    },
  });

  const user = props['data']['shift']['user']
  const venmoDeepLink = `venmo://paycharge?txn=pay&recipients=${user['venmo'] || ''}&amount=20`
  const cashappDeeplink = `https://cash.app/${user['cashapp'] || ''}/20.00`

  return(
    <>
  <Text style={{ flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth, 
                  fontSize: 20,
                  fontWeight: 'bold',
                  padding: 20
                }}
  >
    Tap the buttons below to tip this bartender with Venmo or cashapp
  </Text>
  <View style={{ flex: 2,
                 alignItems: 'center',
                 justifyContent: 'flex-start',
                 flexDirection: 'row',
                 flexWrap: 'wrap',
                 padding: 10
                }}>
  { user['venmo'] ?
    <TouchableOpacity 
      style={{flex: 1}} 
      onPress={() => Linking.openURL(cashappDeeplink)}
     >
      <Image
        source={VenmoIcon}
        style={styles.image}
      />
    </TouchableOpacity>
  :
  <></>
  }
  <View style={{flex: 1}}  />
  { user['cashapp'] ?
    <TouchableOpacity 
      style={{flex: 1}} 
      onPress={() => Linking.openURL(cashappDeeplink)}
     >
      <Image
        source={CashAppIcon}
        style={styles.image}
      />
    </TouchableOpacity>
  :
  <></>
  }
  </View>
  </>
    )
}

export default Payment;
