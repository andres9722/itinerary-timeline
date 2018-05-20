import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import moment from 'moment'

import GroundSegment from '../components/segments/GroundSegment'
import AirportSegment from '../components/segments/AirportSegment'
import FlightSegment from '../components/segments/FlightSegment'

import colors from '../styles/colors'

import data from '../../data.json'

const SEGMENT_TYPES = {
  'GROUND': GroundSegment,
  'AIRPORT': AirportSegment,
  'FLIGHT': FlightSegment
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
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>{this.state.origin_iata} - {this.state.destination_iata}</Text>
        {this.state.segments.map(segment => {
          const SegmentComponent = getSegmentComponent(segment.type)
          return <SegmentComponent
            key={segment.segment_id}
            text={moment(segment.departure).format('h:mm:ss')}
          />
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
