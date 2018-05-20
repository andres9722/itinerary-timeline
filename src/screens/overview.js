import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import TimeBox from '../components/TimeBox'

import colors from '../styles/colors'

export default class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Overview',
    headerStyle: {
      backgroundColor: colors.darkBlue,
    },
    headerTintColor: colors.white,
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Berlin - München</Text>
        <TimeBox text='07:20' active={true} />
        <TimeBox text='08:00' />
        <TimeBox text='08:40' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.white,
    padding: 20,
  }
})
