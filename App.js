import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import ShowBartender from './components/ShowBartender';
import ShowMap from './components/ShowMap';
import Menu from './components/Menu';
import Schedule from './components/Schedule';
import ListBartender from './components/ListBartender';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Show Bartender" component={ShowBartender} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="List Bartenders" component={ListBartender} />
        <Stack.Screen
          name="Map" 
          options={{headerBackVisible:false }}
          component={ShowMap} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

