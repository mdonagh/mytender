import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button as StandardButton, Text} from "react-native";

import Button from './components/Button';
// import Home from './components/Home';

import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require("./assets/images/background-image.png");

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomMarkers from './components/CustomMarkers';
import DefaultMarkers from './components/DefaultMarkers';
import MyMap from './components/MyMap';


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

// import MapView from 'react-native-maps';
// 
// function MapScreen() {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyMap">
        {/* <Stack.Screen  */}
        {/* name="Home"  */}
        {/* component={Home}  */}
        {/* // options={{ title: 'Overview' }} */}
        {/* /> */}
        <Stack.Screen name="Details" component={DetailsScreen} />
        {/* <Stack.Screen name="Map" component={MapScreen} /> */}
        <Stack.Screen name="MyMap" component={MyMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

