import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TimeBox from '../TimeBox'
import GenericSegment from './GenericSegment'

import { colors, metrics } from '../../styles'

export default class Segment extends React.PureComponent {
  render () {
    const {
      departure,
      origin,
      destination,
      detail: { flight_number, gate, seat }
    } = this.props
    return (
      <View>
        <TimeBox text={departure} />
        <GenericSegment>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.text}>{flight_number}</Text>
              <Text style={styles.text}>Boarding 08:20</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.bodyText}>{origin.value}</Text>
              <Text style={styles.bodyText}>{destination.value}</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.text}>Gate {gate}</Text>
              <Text style={styles.text}>Seat {seat}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>On Time</Text>
              </View>
            </View>
          </View>
        </GenericSegment>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.blue,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 5
  },
  text: {
    color: colors.white,
    fontSize: 20
  },
  badge: {
    backgroundColor: colors.green,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: colors.white
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: colors.white,
    padding: 10
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 30,
    backgroundColor: colors.white
  },
  bodyText: {
    color: colors.black,
    fontSize: 40
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderColor: colors.white,
    padding: 10
  }
})
