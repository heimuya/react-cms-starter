import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Types from 'constants/index'

// ------------------------------------
// reducers
// ------------------------------------
export const count = (state, action) => {
  return state.update('count', (x, y) => {
    return x + y
  }, action.payload)
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [Types.COUNTER_INCREMENT]: count
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable({
  count: 0
})

export default createReducer(initialState, ACTION_HANDLERS)
