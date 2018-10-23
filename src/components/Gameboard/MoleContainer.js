import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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
    width: 140,
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#C9BF9C',
    borderRadius: 50,
    width: 140,
    position: 'relative',
  },
});

const MoleContainer = () => (
  <View style={styles.container}>
    <Hole />
    <MoleAnimated />
  </View>
)

// MoleContainer.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// }

export default MoleContainer