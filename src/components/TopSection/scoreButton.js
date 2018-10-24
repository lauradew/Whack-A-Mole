import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  scoreContainer: {
    position: 'absolute',
    width: 140,
    left: 10,
    top: 30,
    zIndex: 1,
  },
  hitContainer: {
    position: 'absolute',
    width: 140,
    left: 10,
    top: 80,
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
  topContainer: {
    zIndex: 1,
  }
})

class ScoreButton extends React.Component {
  render() {
    return (
      <View style={styles.topContainer}>
        <View style={styles.scoreContainer}>
          <Image style={{ width: 140 }} source={require('../../../assets/gameBtn.png')} resizeMode="contain" />
          <Text style={styles.textScore}>{this.props.score}</Text>
        </View>
        <View style={styles.hitContainer}>
          <Image style={{ width: 140 }} source={require('../../../assets/gameBtn.png')} resizeMode="contain" />
          <Text style={styles.textScore}>{this.props.hit}</Text>
        </View>
      </View>
    )
  }
}


const mapStateToProps = (store) => {
  return {
    score: store.gameReducer.score,
    hit: store.gameReducer.hit
  }
}

ScoreButton.propTypes = {
  score: PropTypes.number.isRequired,
  hit: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(ScoreButton)