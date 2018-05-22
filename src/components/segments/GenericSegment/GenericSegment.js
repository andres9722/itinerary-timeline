import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors, metrics } from '../../../styles'

export default class Segment extends React.PureComponent {
  render () {
    const { children } = this.props
    return <View style={styles.container}>{children}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 20,
    borderColor: colors.white,
    borderLeftWidth: 2
  }
})
