import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import TimeBox from '../TimeBox'
import GenericSegment from '../segments/GroundSegment'

import colors from '../../styles/colors'
import metrics from '../../styles/metrics'

export default class FlightCard extends React.PureComponent {
  render () {
    return (
      <View style={styles.container}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: colors.red
  },
})
