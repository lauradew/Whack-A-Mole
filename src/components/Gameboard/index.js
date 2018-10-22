import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import MoleContainer from './MoleContainer'

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9BF9C',
    paddingTop: 80,
  }
});


const Gameboard = () => (
  <View style={styles.container}>
    <MoleContainer />
  </View>
);


export default Gameboard;