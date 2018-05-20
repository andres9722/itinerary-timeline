import React from 'react'
import { Text, View } from 'react-native'

import TimeBox from '../TimeBox'
import GenericSegment from './GenericSegment'
import FlightCard from '../cards/FlightCard'

import colors from '../../styles/colors'
import metrics from '../../styles/metrics'

export default class Segment extends React.PureComponent {
  render () {
    const {children, text, active} = this.props
    return (
      <View>
        <TimeBox text={text} active={active} />
        <GenericSegment>
          <FlightCard />
        </GenericSegment>
      </ View>
    )
  }
}
