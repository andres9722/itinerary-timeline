import React, { Component, Fragment } from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import { HomeScreen, OverviewScreen } from './src/screens'
import { colors } from './src/styles'

import reducer from './reducer'

const client = axios.create({
  baseURL: 'https://api.myjson.com/bins/',
  responseType: 'json'
})

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)))

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Overview: OverviewScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { backgroundColor: colors.darkBlue },
      headerTintColor: colors.white
    }
  }
)

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <StatusBar backgroundColor='blue' barStyle='light-content' />
        <Provider store={store}>
          <RootStack />
        </Provider>
      </Fragment>
    )
  }
}
