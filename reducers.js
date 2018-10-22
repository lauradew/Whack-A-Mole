import { combineReducers } from 'redux'

const initialState = {
  score: 0,
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({ gameReducer })

export default rootReducer