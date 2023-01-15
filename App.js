import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import ShowBartender from './components/ShowBartender';
import Map from './components/Map';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={ShowBartender} />
        <Stack.Screen name="ShowBartender" component={ShowBartender} />
        <Stack.Screen name="Map" component={ShowMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

