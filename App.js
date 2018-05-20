import React from 'react'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './src/screens/Home'
import OverviewScreen from './src/screens/Overview'

import colors from './src/styles/colors'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Overview: OverviewScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { backgroundColor: colors.darkBlue },
      headerTintColor: colors.white,
    },
  }
)

export default class App extends React.Component {
  render () {
    return <RootStack />
  }
}
