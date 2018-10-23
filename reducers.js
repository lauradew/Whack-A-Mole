import { combineReducers } from 'redux'
import { GAMEON, HIT, ACTIVATE_MOLE } from './actions'

const initialState = {
  gameOn: true,
  board: [false, false, false, false, false, false, false, false, false],
  score: 0,
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
        score: state.score + 10
      }
    case ACTIVATE_MOLE:
      return {
        ...state,
        board: state.board.map((value, index) => index === action.moleIndex)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ gameReducer })

export default rootReducer