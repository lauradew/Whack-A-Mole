import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9BF9C'
  }
});


const Gameboard = () => (
  <View style={styles.container}>

  </View>
);


export default Gameboard;