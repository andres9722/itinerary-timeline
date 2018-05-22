import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

import { colors } from '../styles'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  render () {
    return (
      <View style={styles.container}>
        <Button
          title='Go to Overview'
          onPress={() => this.props.navigation.navigate('Overview')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
