import React, { Component } from 'react';
import Screen1 from './src/components/DrawerScreens/Screen1';
import Screen2 from './src/components/DrawerScreens/Screen1';
import Screen3 from './src/components/DrawerScreens/Screen1';

import Login from './src/components/Auth/Login';
import Detail from './src/components/Detail';
import Feed from './src/components/Feed';

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const AppStack = createStackNavigator(
  {
    FeedRoute: Feed,
    DetailRoute: Detail
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: 'white'
    },
  }
);

const AuthStack = createStackNavigator({
  LoginRoute: Login
});


export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth'
  },
));