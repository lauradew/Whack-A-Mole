import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Hole from './hole'
import MoleAnimated from './moleAnimated'
import { moleMissed } from '../../../actions'

const styles = StyleSheet.create({
  containerMoleAndHole: {
    borderRadius: 50,
    width: 140,
    position: 'relative',
  },
  tap: {
    position: 'absolute'
  }
})

const mapStateToProps = (store) => {
  return {
    board: store.gameReducer.board,
    gameOn: store.gameReducer.gameOn,
  }
}

class MoleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moleIndex: this.props.index
    }
    this.handleMiss = this.handleMiss.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ moleIndex: nextProps.index })
  }

  handleMiss() {
    if (this.props.gameOn) {
      return this.props.dispatch(moleMissed())
    }
    return null
  }

  render() {
  const MoleIsActive = this.props.board[this.state.moleIndex]
  return (
    <View style={styles.containerMoleAndHole} >
      <TouchableOpacity style={styles.tap} onPress={this.handleMiss}>
      <Hole />
      {MoleIsActive &&
        <MoleAnimated style={{zIndex:-4}} moleIndex={this.state.moleIndex} />
      }
      </TouchableOpacity>
    </View>
  )
  }
}

MoleContainer.propTypes = {
  index: PropTypes.number.isRequired,
  board: PropTypes.array.isRequired,
  gameOn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(MoleContainer)