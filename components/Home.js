import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button as StandardButton} from "react-native";

import ImageViewer from './ImageViewer';

const PlaceholderImage = require("../assets/images/background-image.png");

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './Button';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />

      <StandardButton
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});