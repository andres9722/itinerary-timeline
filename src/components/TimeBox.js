import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../styles/colors'
import metrics from '../styles/metrics'

export default class TimeBox extends React.Component {
    render () {
        const { text, active } = this.props
        const activeStyle = active ? {backgroundColor: colors.white} : {}
        return (
            <View style={styles.container}>
                <View style={[styles.dot, activeStyle]}/>
                <Text style={styles.text}>{text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      height: 40,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: metrics.baseMargin
    },
    dot: {
        height: 10,
        width: 10,
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
    },
    text: {
        color: colors.white
    }
  })
