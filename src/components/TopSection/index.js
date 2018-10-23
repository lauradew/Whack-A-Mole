import React from 'react'
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native'
import ScoreButton from './scoreButton'
import Timer from './timer'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width,
  },
  imageBackground: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  startBtn: {
    width: 400,
    top: 50,
    left: -240,
    position: 'absolute'
  },
  startBtnText: {
    position: 'absolute',
    fontSize: 32,
    fontWeight: 'bold',
    left: -110,
    top: 60
  }
})

class TopSection extends React.Component {

render() {
  return (
    <View style={styles.container}>
      <ScoreButton />
      <Timer />
      <Image
        style={styles.imageBackground}
        source={require('../../../assets/game-screen-top.png')}
      />
    </View>
  )}
}

export default TopSection