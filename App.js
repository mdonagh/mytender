import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import ShowBartender from './components/ShowBartender';
import ShowMap from './components/ShowMap';
import Menu from './components/Menu';
import ListBartender from './components/ListBartender';
import EnterShift from './components/EnterShift';
import ListShift from './components/ListShift';

const Stack = createNativeStackNavigator();

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
// use Ngrok with rails for dev
const client = new ApolloClient({
  uri: 'https://0fd1-98-237-187-98.ngrok.io/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
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

