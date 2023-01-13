import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button as StandardButton, Text} from "react-native";

import Button from './components/Button';
import Home from './components/Home';

import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require("./assets/images/background-image.png");

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={Home} 
        // options={{ title: 'Overview' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

