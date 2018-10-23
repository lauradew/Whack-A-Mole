import React from 'react'
import { StyleSheet, View } from 'react-native'
import TopSection from './src/components/TopSection/index'
import Gameboard from './src/components/Gameboard/index'
import { Provider } from 'react-redux'
import store from './store'

export default class Game extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TopSection />
          <View style={{ flex: 3 }}>
            <Gameboard />
          </View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
