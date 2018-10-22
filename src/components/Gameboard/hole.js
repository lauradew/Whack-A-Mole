import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  containerAnimation: {
    zIndex: 0,
    position: 'absolute',
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  holeImg: {
    height: 110,
    width: 110,
    borderRadius: 50,
     backgroundColor: 'transparent'
  }
})

const Hole = () => (
  <View style={styles.containerAnimation}>
    <Image style={styles.holeImg} source={require('../../../assets/hole.png')} resizeMode="contain" />
  </View>
)



export default Hole