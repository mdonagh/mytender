import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import ShowBartender from './components/ShowBartender';
import ShowMap from './components/ShowMap';
import Menu from './components/Menu';
import ListBartender from './components/ListBartender';
import EnterShift from './components/EnterShift';
import ListShift from './components/ListShift';

import PhotoUpload from './components/PhotoUpload';


const Stack = createNativeStackNavigator();

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as SecureStore from 'expo-secure-store';

const httpLink = createHttpLink({
  uri: 'https://7530-24-17-149-35.ngrok.io/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = false
  token = await SecureStore.getItemAsync('token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `Basic ${token}` : ""
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
    {/* change initialRoute back to Login */}
      <Stack.Navigator initialRouteName="Menu"> 
        <Stack.Screen name="Login" component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Show Bartender" component={ShowBartender} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="List Bartenders" component={ListBartender} />
        <Stack.Screen name="Enter Shift" component={EnterShift} />
        <Stack.Screen name="List Shifts" component={ListShift} />
        <Stack.Screen name="Add Photos" component={PhotoUpload} />

        <Stack.Screen
          name="Map"
          options={{headerShown: false}}
          component={ShowMap}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;

