import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../../styles/colors'
import metrics from '../../styles/metrics'

export default class Segment extends React.PureComponent {
  render () {
    const { children } = this.props
    return <View style={styles.container}>{children}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginLeft: 20,
    borderColor: colors.white,
    borderLeftWidth: 2
  }
})
