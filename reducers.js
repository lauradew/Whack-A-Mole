import { combineReducers } from 'redux'
import { HIT } from './actions'

const initialState = {
  score: 0,
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIT:
      return {
        ...state,
        score: state.score + 10
      }

    default:
      return state;
  }
}

const rootReducer = combineReducers({ gameReducer })

export default rootReducer