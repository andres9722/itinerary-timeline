import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TimeBox from '../../TimeBox'
import GenericSegment from '../GenericSegment/GenericSegment'

import { colors, metrics } from '../../../styles'

export default class Segment extends React.PureComponent {
  render () {
    const { active, departure, origin } = this.props
    return (
      <View>
        <TimeBox time={departure} active={active} />
        <GenericSegment>
          <View style={[styles.card, active ? styles.activeCard : {}]}>
            <Text style={styles.text}>Pick up from</Text>
            <Text style={styles.text}>{origin.value.split(',')[0]}</Text>
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
    borderColor: colors.white,
    borderRadius: 5
  },
  activeCard: {
    backgroundColor: colors.darkBlue
  },
  text: {
    color: colors.white,
    fontSize: 20
  }
})
