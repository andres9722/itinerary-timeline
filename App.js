import React from 'react'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './src/screens/Home'
import OverviewScreen from './src/screens/Overview'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Overview: OverviewScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default class App extends React.Component {
  render () {
    return <RootStack />
  }
}
