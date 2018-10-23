import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  scoreContainer: {
    position: 'absolute',
    width: 140,
    left: 10,
    top: 30,
    zIndex: 1,
  },
  textScore: {
    position: 'absolute',
    zIndex: 2,
    top: 15,
    left: 25,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#603800',
  },
});

const ScoreButton = ({ score }) => (
  <View style={styles.scoreContainer}>
    <Image style={{ width: 140 }} source={require('../../../assets/gameBtn.png')} resizeMode="contain" />
    <Text style={styles.textScore}>{score}</Text>
  </View>
);


const mapStateToProps = (store) => {
  return {
    score: store.gameReducer.score,
  };
};


ScoreButton.propTypes = {
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ScoreButton);