import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TimeBox from '../TimeBox'
import GenericSegment from './GenericSegment'

import colors from '../../styles/colors'
import metrics from '../../styles/metrics'

export default class Segment extends React.PureComponent {
  render () {
    const {children, text, active} = this.props
    return (
      <View>
        <TimeBox text={text} active={active} />
        <GenericSegment>
          <View style={styles.card}></View>
        </GenericSegment>
      </ View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: "100%",
    backgroundColor: colors.yellow
  },
})
