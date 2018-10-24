import { combineReducers } from 'redux'
import { GAMEON, HIT, MISSED, ACTIVATE_MOLE, DEACTIVATE_MOLE, RESTART } from './actions'

const initialState = {
  gameOn: false,
  board: [false, false, false, false, false, false, false, false, false],
  score: 0,
  hit: 0
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAMEON:
      return {
        ...state,
        gameOn: !state.gameOn
      }
    case HIT:
      return {
        ...state,
        score: state.score + 10,
        hit: state.hit + 1
      }
    case MISSED:
      return {
        ...state,
        score: state.score -3
      }
    case ACTIVATE_MOLE:
      return {
        ...state,
        board: state.board.map((value, index) => index === action.moleIndex ? true : value)
        // board: state.board.map((value, index) => action.moleIndexArr.indexOf(index) > -1)
      }
    case DEACTIVATE_MOLE:
      return {
        ...state,
        board: state.board.map((value, index) => index === action.moleIndex ? false : value)
      }
    case RESTART:
      return {
        ...state,
        score: 0,
        hit: 0
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ gameReducer })

export default rootReducer