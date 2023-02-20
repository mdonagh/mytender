import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import ShowBartender from './components/ShowBartender';
import ShowMap from './components/ShowMap';
import Menu from './components/Menu';
import ListBartender from './components/ListBartender';
import EnterShift from './components/EnterShift';
import ListShift from './components/ListShift';
import EditProfile from './components/EditProfile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Show Bartender" component={ShowBartender} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="List Bartenders" component={ListBartender} />
        <Stack.Screen name="Enter Shift" component={EnterShift} />
        <Stack.Screen name="List Shifts" component={ListShift} />
        <Stack.Screen name="Edit Profile" component={EditProfile} />
        <Stack.Screen
          name="Map" 
          options={{headerShown: false}}
          component={ShowMap}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

