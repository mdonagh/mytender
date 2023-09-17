import React, { useState } from 'react';
import {
  BottomNavigation as BottomNavigationBase,
  Text,
} from 'react-native-paper';
import ShowMap from '../components/ShowMap';
import ListBartender from '../components/ListBartender';
import Profile from './Profile';

const routes = [
  {
    key: 'explore',
    title: 'Explore View',
    focusedIcon: 'map',
    unfocusedIcon: 'map-outline',
  },
  {
    key: 'list',
    title: 'List View',
    focusedIcon: 'view-list',
    unfocusedIcon: 'view-list-outline',
  },
  {
    key: 'profile',
    title: 'Profile',
    focusedIcon: 'account',
    unfocusedIcon: 'account-outline',
  },
];

const renderScene = BottomNavigationBase.SceneMap({
  explore: ShowMap,
  profile: Profile,
  list: ListBartender,
});

const Dashboard = () => {
  const [index, setIndex] = useState(0);

  return (
    <BottomNavigationBase
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Dashboard;
