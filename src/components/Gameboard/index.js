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
  boardContainer: {
    flex: 1,
    backgroundColor: '#C9BF9C',
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: 'space-between'
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center'
  },
  singleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center'
  }
});


const Gameboard = () => (
  <View style={styles.boardContainer}>
    <View style={styles.rowContainer}>
      <MoleContainer />
      <MoleContainer />
    </View>
    <View style={styles.rowContainer}>
      <MoleContainer />
    </View>
    <View style={styles.rowContainer}>
      <MoleContainer />
      <MoleContainer />
    </View>
    <View style={styles.rowContainer}>
      <MoleContainer />
    </View>
    <View style={styles.rowContainer}>
      <MoleContainer />
      <MoleContainer />
    </View>
    <View style={styles.rowContainer}>
      <MoleContainer />
    </View>
  </View>
);


export default Gameboard;