import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import {
  GroundSegment,
  AirportSegment,
  FlightSegment
} from '../../components/segments'

import { colors } from '../../styles'

import { getData } from '../../../reducer'

const SEGMENT_TYPES = {
  GROUND: GroundSegment,
  AIRPORT: AirportSegment,
  FLIGHT: FlightSegment
}

const getSegmentComponent = segment => SEGMENT_TYPES[segment]

class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Overview'
  }
  componentDidMount () {
    this.props.getData('5z37m')
  }
  render () {
    const { data } = this.props
    if (data.loading === false && data.itinerary) {
      const { origin_iata, destination_iata, segments } = data.itinerary
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
    } else{
      return <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 20,
    color: colors.white
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.white,
    padding: 20
  }
})

const mapStateToProps = state => {
  return {
    data: state
  }
}

const mapDispatchToProps = {
  getData
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewScreen)
