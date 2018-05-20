import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import GroundSegment from '../components/segments/GroundSegment'

import colors from '../styles/colors'

export default class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Overview'
  }
  constructor (props) {
    super(props)
    this.state = {
      segments: [
        {
          segment_id: "452dfb51-0ac6-4274-b740-af6f89bc6116",
          time: '07:20',
          active: true
        }
      ]
    }
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Berlin - München</Text>
        {this.state.segments.map(segment => {
          return <GroundSegment key={segment.segment_id} {...segment}/>
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
