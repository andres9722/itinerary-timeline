import React, { Component, Fragment } from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './src/screens/HomeScreen'
import OverviewScreen from './src/screens/OverviewScreen'

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

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <RootStack />
      </Fragment>
    )
  }
}
