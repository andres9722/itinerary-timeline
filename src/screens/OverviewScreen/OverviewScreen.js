import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import {
  GroundSegment,
  AirportSegment,
  FlightSegment
} from '../../components/segments'

import { colors } from '../../styles'

import data from '../../../data.json'

const SEGMENT_TYPES = {
  GROUND: GroundSegment,
  AIRPORT: AirportSegment,
  FLIGHT: FlightSegment
}

const getSegmentComponent = segment => SEGMENT_TYPES[segment]

export default class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Overview'
  }
  constructor (props) {
    super(props)
    this.state = data
  }
  render () {
    const { origin_iata, destination_iata, segments } = this.state
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>
          {origin_iata} - {destination_iata}
        </Text>
        {segments.map((segment, index) => {
          const SegmentComponent = getSegmentComponent(segment.type)
          return (
            <SegmentComponent
              key={segment.segment_id}
              active={index === 0}
              {...segment}
            />
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.white,
    padding: 20
  }
})
