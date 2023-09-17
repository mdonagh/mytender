import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Bartender from '../assets/bartender2.png';
import Logo from '../assets/logo.png';
import ScreenLayout from '../components/ScreenLayout';

const Welcome = () => {
  const navigation = useNavigation();
  const goToLogin = () => navigation.navigate('Login');
  const goToRegister = () => navigation.navigate('Register');

  return (
    <ScreenLayout backgroundImage={Bartender} title="MyTender">
      <Image
        source={Logo}
        style={{
          width: '80%',
          // Without height undefined it won't work
          height: undefined,
          // figure out your image aspect ratio
          aspectRatio: 135 / 76,
          borderRadius: 16,
        }}
      />

      <View style={styles.card}>
        <Card>
          <Card.Content style={styles.content}>
            <Button mode="contained" onPress={goToLogin}>
              Login
            </Button>
            <Button mode="contained-tonal" onPress={goToRegister}>
              Register
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
  },
  content: {
    gap: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Welcome;
