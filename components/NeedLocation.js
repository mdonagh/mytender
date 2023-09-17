import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import BarBackground from '../assets/black-white-bar.png';
import ScreenLayout from './ScreenLayout';

const NeedLocation = ({ title }) => {
  return (
    <ScreenLayout
      backgroundImage={BarBackground}
      title={title}
      showBottomNavigation={true}
    >
      <Card>
        <Card.Title
          titleStyle={styles.cardTitle}
          titleVariant="titleLarge"
          title="Location Required"
        />
        <Card.Content>
          <Text variant="displaySmall">
            You must allow this app to access your location
          </Text>
        </Card.Content>
      </Card>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    color: 'red',
  },
});

export default NeedLocation;
