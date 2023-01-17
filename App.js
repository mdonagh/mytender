import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import ShowBartender from './components/ShowBartender';
import ShowMap from './components/ShowMap';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ShowBartender" component={ShowBartender} />
        <Stack.Screen
        name="Map" 
        options={{headerBackVisible:false }}
        component={ShowMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// testing testing
// aaron submited this change via chrome android
// at 12:22pm 1/17/2023

