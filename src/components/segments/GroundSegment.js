import React from 'react'
import { Text, View } from 'react-native'

import TimeBox from '../TimeBox'
import GenericSegment from './GenericSegment'
import GroundCard from '../cards/GroundCard'

import colors from '../../styles/colors'
import metrics from '../../styles/metrics'

export default class Segment extends React.PureComponent {
  render () {
    const {children, time, active} = this.props
    return (
      <View>
        <TimeBox text={time} active={active} />
        <GenericSegment>
          <GroundCard />
        </GenericSegment>
      </ View>
    )
  }
}
