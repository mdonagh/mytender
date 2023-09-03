import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StripeProvider } from '@stripe/stripe-react-native';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import AccountSettings from './components/AccountSettings';
import CancelSubscription from './components/CancelSubscription';
import EnterShift from './components/EnterShift';
import ListBartender from './components/ListBartender';
import ListShift from './components/ListShift';
import Login from './components/Login';
import Menu from './components/Menu';
import Payment from './components/Payment';
import PhotoUpload from './components/PhotoUpload';
import Register from './components/Register';
import ShowBartender from './components/ShowBartender';
import ShowMap from './components/ShowMap';
import { ApolloProvider } from './providers/ApolloProvider';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoginLoading, setIsLoginLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    let mounted = true;
    const checkLogin = async () => {
      const token = await SecureStore.getItemAsync('token');
      const role = await SecureStore.getItemAsync('role');

      console.log('ROLE:', role);

      if (token && mounted) {
        setIsLoginLoading(false);
        if (role === 'bartender') {
          setInitialRoute('Map');
        } else {
          setInitialRoute('Menu');
        }
      } else {
        setInitialRoute('Login');
        setIsLoginLoading(false);
      }
    };
    checkLogin();

    return () => {
      mounted = false;
    };
  }, []);

  if (isLoginLoading || !initialRoute) {
    return null;
  }

  return (
    <ApolloProvider>
      <StripeProvider
        publishableKey="pk_test_51Ng6T9FkuyPevR8MA9bhsHnJIGkbKihsHVmPK3Ps6zC3A8NKZPAnefhskAEhIckIZamAsnYSJW0uaK3V4sFm2HSS00lDuL6j1H"
        urlScheme="myregulars" // required for 3D Secure and bank redirects
        // merchantIdentifier="merchant.com.mytender"
      >
        <NavigationContainer>
          {/* change initialRoute back to Login */}
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="Show Bartender" component={ShowBartender} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="List Bartenders" component={ListBartender} />
            <Stack.Screen name="Enter Shift" component={EnterShift} />
            <Stack.Screen name="My Shifts" component={ListShift} />
            <Stack.Screen name="Add Photos" component={PhotoUpload} />
            <Stack.Screen name="Account Settings" component={AccountSettings} />
            <Stack.Screen
              name="Cancel Subscription"
              component={CancelSubscription}
            />

            <Stack.Screen
              name="Map"
              options={{ headerShown: false }}
              component={ShowMap}
            />
          </Stack.Navigator>
          <Toast />
        </NavigationContainer>
      </StripeProvider>
    </ApolloProvider>
  );
};

export default App;
