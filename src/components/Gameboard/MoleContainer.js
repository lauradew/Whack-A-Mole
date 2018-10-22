import React from 'react'
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native'
import Hole from './hole'
import MoleAnimated from './moleAnimated'

const styles = StyleSheet.create({
  containerMoleAndHole: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    width: 120,
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#C9BF9C',
    borderRadius: 50,
    width: 110,
    position: 'relative',
  },
});

const MoleContainer = () => (
  <View style={styles.container}>
    <Hole />
    <MoleAnimated />
  </View>
)

export default MoleContainer