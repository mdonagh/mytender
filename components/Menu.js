import React, { useState } from 'react'

import { View,
         Text,
         Image,
         StyleSheet,
         Dimensions,
         Button,
         Pressable,
       } from "react-native";


function Menu() {
  const {width, height} = Dimensions.get('window');

  const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
  });

  return (
  <View style={{ flex: 1,
                 alignItems: 'center',
                 justifyContent: 'flex-start',
                 flexDirection: 'row',
                 flexWrap: 'wrap',
                 padding: 10
                }}>
    <View style={{flex: 6}}>
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
        ON MENU
      </Text>
        
      <Text style={{ flex: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}
      >
         ON MENU
      </Text>
      <Text style={{ flex: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      fontWeight: 'bold',
                    }}
      >
         ON MENU
      </Text>
      </View>
    </View>
  );
}

export default Menu;
