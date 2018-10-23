import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  View,
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
    borderRadius: 50,
    width: 140,
    position: 'relative',
  },
})

const mapStateToProps = (store) => {
  return {
    board: store.gameReducer.board,
    gameOn: store.gameReducer.gameOn,
  }
}

const MoleContainer = ({ index, board, gameOn, dispatch }) => {
  const MoleIsActive = board[index]

  return (
    <View style={styles.containerMoleAndHole}>
      <Hole />
      {MoleIsActive &&
        <MoleAnimated moleIndex={index} />
      }
    </View>
  )
}

MoleContainer.propTypes = {
  index: PropTypes.number.isRequired,
  board: PropTypes.array.isRequired,
  gameOn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(MoleContainer)