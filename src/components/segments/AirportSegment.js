import React from 'react'
import { Text, View } from 'react-native'

import TimeBox from '../TimeBox'
import GenericSegment from './GenericSegment'
import AirportCard from '../cards/AirportCard'

import colors from '../../styles/colors'
import metrics from '../../styles/metrics'

export default class Segment extends React.PureComponent {
  render () {
    const {children, text, active} = this.props
    return (
      <View>
        <TimeBox text={text} active={active} />
        <GenericSegment>
          <AirportCard />
        </GenericSegment>
      </ View>
    )
  }
}
