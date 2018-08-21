import React from 'react'


import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import  First  from '../containers/First';
import  Second from '../containers/Second';

export const Tabs = createBottomTabNavigator({
    Home: {
      screen: First,
      navigationOptions: {
        tabBarLabel: 'Stocks',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      },
    },
    Map: {
      screen: Second,
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor }) => <Icon name="map" size={35} color={tintColor} />
      },
    },
  });
  