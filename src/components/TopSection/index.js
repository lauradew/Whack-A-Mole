import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import ScoreButton from './scoreButton'
import Timer from './timer'

const { width } = Dimensions.get('window');

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
});

const TopSection = () => (
  <View style={styles.container}>
    <ScoreButton />
    <Timer />
    <Image
      style={styles.imageBackground}
      source={require('../../../assets/game-screen-top.png')}
    />
  </View>
);


export default TopSection;