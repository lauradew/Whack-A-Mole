import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  containerAnimation: {
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  holeImg: {
    height: 140,
    width: 140,
    borderRadius: 50,
    backgroundColor: 'transparent',
    zIndex: 5
  },
  holeMask: {
    position: 'absolute',
    zIndex: 2,
    left: -5,
    width: 155,
    justifyContent: 'center',
    marginTop: 25
  }
})

const Hole = () => (
  <View>
    <View style={styles.containerAnimation}>
      <Image style={styles.holeImg} source={require('../../../assets/hole.png')} resizeMode="contain" />
    </View>
    <View>
      <Image style={styles.holeMask} source={require('../../../assets/holeMask.png')} resizeMode="contain" />
    </View>
  </View>
)

export default Hole