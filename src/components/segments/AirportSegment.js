import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TimeBox from '../TimeBox'
import GenericSegment from './GenericSegment'

import colors from '../../styles/colors'
import metrics from '../../styles/metrics'

export default class Segment extends React.PureComponent {
  render () {
    const { departure, origin, detail } = this.props
    return (
      <View>
        <TimeBox time={departure} />
        <GenericSegment>
          <View style={styles.card}>
            <Text style={styles.text}>{origin.value} {origin.type}</Text>
            <Text style={styles.text}>Terminal C - {detail.busyness_index}</Text>
          </View>
        </GenericSegment>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: '100%',
    backgroundColor: colors.blue,
    borderWidth: 2,
    borderColor: colors.white
  },
  text: {
    color: colors.white,
    fontSize: 20
  }
})
