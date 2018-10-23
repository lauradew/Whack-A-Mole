import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import MoleContainer from './MoleContainer'
import { generateRandomMole } from '../../../actions'

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

const mapStateToProps = (store) => {
  return {
    gameOn: store.gameReducer.gameOn,
  }
}


class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: props.gameOn
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({ gameOn: nextProps.gameOn })
    if (nextProps.gameOn) {
      this.startInterval()
    }
  }

  componentDidMount() {
    this.startInterval()
  }

  startInterval(){
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
    const randomDelay = (Math.random() * 300) + 100;
    this.intervalId = setInterval(this.activateMole, randomDelay);
  }

  activateMole = () => {
    let { dispatch, gameOn } = this.props
    if (this.state.gameOn) {
      dispatch(generateRandomMole())
      return
    }
    clearInterval(this.intervalId)
  }

render() {
  return (
    <View style={styles.boardContainer}>
      <View style={styles.rowContainer}>
        <MoleContainer index={0} />
        <MoleContainer index={1} />
      </View>
      <View style={styles.rowContainer}>
        <MoleContainer index={2} />
      </View>
      <View style={styles.rowContainer}>
        <MoleContainer index={3} />
        <MoleContainer index={4} />
      </View>
      <View style={styles.rowContainer}>
        <MoleContainer index={5} />
      </View>
      <View style={styles.rowContainer}>
        <MoleContainer index={6} />
        <MoleContainer index={7} />
      </View>
      <View style={styles.rowContainer}>
        <MoleContainer index={8} />
      </View>
    </View>
  )}
}

Gameboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  gameOn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(Gameboard)