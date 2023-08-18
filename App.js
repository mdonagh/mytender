import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import Register from './components/Register';

import ShowBartender from './components/ShowBartender';
import ShowMap from './components/ShowMap';
import Menu from './components/Menu';
import ListBartender from './components/ListBartender';
import EnterShift from './components/EnterShift';
import ListShift from './components/ListShift';
import Payment from './components/Payment';


import PhotoUpload from './components/PhotoUpload';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

import { StripeProvider } from '@stripe/stripe-react-native';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as SecureStore from 'expo-secure-store';

// const httpLink = createHttpLink({
//   uri: 'https://mytender-dc1b2d59a1a2.herokuapp.com/graphql',
// });

const httpLink = createHttpLink({
  uri: 'https://9924-24-17-149-35.ngrok.io/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = false
  token = await SecureStore.getItemAsync('token');
  console.log(token);
  return {
    headers: {
      ...headers,
      Authorization: token ? `Basic ${token}` : ""
    }
  }
});

// https://www.apollographql.com/docs/react/data/queries/#setting-a-fetch-policy
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    fetchPolicy: 'cache-and-network'
  }
});


function App() {
  return (
    <ApolloProvider client={client}>
    <StripeProvider
      publishableKey="pk_test_51Ng6T9FkuyPevR8MA9bhsHnJIGkbKihsHVmPK3Ps6zC3A8NKZPAnefhskAEhIckIZamAsnYSJW0uaK3V4sFm2HSS00lDuL6j1H"
      urlScheme="mytender" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.mytender"
    >
      <NavigationContainer>
      {/* change initialRoute back to Login */}
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Register" component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Payment" component={Payment} 
            options={{headerShown: false}}
          />

          <Stack.Screen name="Show Bartender" component={ShowBartender} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="List Bartenders" component={ListBartender} />
          <Stack.Screen name="Enter Shift" component={EnterShift} />
          <Stack.Screen name="My Shifts" component={ListShift} />
          <Stack.Screen name="Add Photos" component={PhotoUpload} />

          <Stack.Screen
            name="Map"
            options={{headerShown: false}}
            component={ShowMap}
          />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </StripeProvider>

    </ApolloProvider>
  );
}

export default App;

