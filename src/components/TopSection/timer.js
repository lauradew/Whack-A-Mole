import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, StyleSheet, AlertIOS, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { gameControl, resetGame } from '../../../actions'

const styles = StyleSheet.create({
  timerContainer: {
    position: 'absolute',
    width: 140,
    right: 10,
    top: 30,
    zIndex: 1,
  },
  textTimer: {
    position: 'absolute',
    zIndex: 2,
    top: 15,
    left: 25,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#603800',
  },
  tryAgain: {
    width: 400,
    top: 50,
    left: -240,
    position: 'absolute'
  },
  tryAgainText: {
    position: 'absolute',
    fontSize: 32,
    fontWeight: 'bold',
    left: -110,
    top: 60
  }
});

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 1,
      seconds: 59,
      gameOver: false
    }
    this.resetGame = this.resetGame.bind(this)
  }

  componentDidMount() {
    this.intervalId = setInterval(this.handleTimer, 1000);
    this.props.dispatch(gameControl());
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleTimer = () => {
    const { dispatch } = this.props;
    const { minutes, seconds } = this.state;

    if (minutes === 0 && seconds === 0) {
      this.setState({ gameOver: true });
      clearInterval(this.intervalId);
      dispatch(gameControl());
      return;
    }
    if (seconds > 0) {
      this.setState({ seconds: seconds - 1 });
    }
    if (seconds === 0 && minutes > 0) {
      this.setState({ minutes: 0, seconds: 60 });
    }
  }

  resetGame() {
    if (this.state.gameOver) {
      this.setState({
        minutes: 1,
        seconds: 59,
        gameOver: false
      })
      this.props.dispatch(resetGame())
      this.intervalId = setInterval(this.handleTimer, 1000)
      return
    }
    return null
  }

  render() {
    const { minutes, seconds, gameOver } = this.state
    return (
      <View style={styles.timerContainer}>
        <Image style={{ width: 140 }} source={require('../../../assets/gameBtn.png')} resizeMode="contain" />
        <Text style={styles.textTimer}>{`${minutes}:${seconds}`}</Text>
        {gameOver && AlertIOS.alert('Game Over')}
        {gameOver &&
          <View style={styles.timerContainer}>
          <TouchableOpacity
            onPress={this.resetGame}
          >
          <Image style={styles.tryAgain} source={require('../../../assets/gameBtn.png')} resizeMode="contain" />
          <Text style={styles.tryAgainText}>Try Again</Text>
          </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    score: store.gameReducer.score,
  };
};


Timer.propTypes = {
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(Timer)