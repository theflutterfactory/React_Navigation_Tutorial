import Screen1 from './src/components/DrawerScreens/Screen1';
import Screen2 from './src/components/DrawerScreens/Screen2';
import Screen3 from './src/components/DrawerScreens/Screen3';

import Login from './src/components/Auth/Login';
import Detail from './src/components/Detail';
import Feed from './src/components/Feed';

import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Feed,
      navigationOptions: () => ({
        title: 'Home'
      })
    },
    Contacts: {
      screen: Screen1,
      navigationOptions: () => ({
        title: 'Contacts'
      })
    },
    Recipes: {
      screen: Screen2,
      navigationOptions: () => ({
        title: 'Recipes'
      })
    },
    Settings: {
      screen: Screen3,
      navigationOptions: () => ({
        title: 'Settings'
      })
    },
  });

const DrawerStackNavigator = createStackNavigator(
  {
    DrawerNavigator: { screen: DrawerNavigator }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: 'green' },
      headerTintColor: 'white',
      title: navigation.state.routes[navigation.state.index].routeName,
    })
  }
);

const AppNavigator = createStackNavigator(
  {
    DrawerRoute: {
      screen: DrawerStackNavigator,
      navigationOptions: () => ({
        header: null
      })
    },
    DetailRoute: Detail
  }
);

const AuthNavigator = createStackNavigator({
  LoginRoute: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    App: AppNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Auth'
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white'
    },
  }
));