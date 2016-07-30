import Types from 'constants/index'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// ------------------------------------
// Reducer
// ------------------------------------
const INITIAL_STATE = Immutable({
  isLoading: false,
  error: false,
  profile: null
})

export const loginRequest = (state = INITIAL_STATE, action) => {
  return state.set('isLoading', true)
}

export const loginSuccess = (state = INITIAL_STATE, action) => {
  return state.set('error', false).set('profile', action.payload).set('isLoading', false)
}

export const loginFailure = (state = INITIAL_STATE, action) => {
  return state.set('error', action.payload).set('isLoading', false)
}

export const request = (state = INITIAL_STATE, action) => {
  return state.set('isLoading', true)
}

export const success = (state = INITIAL_STATE, action) => {
  return state.set('error', false).set('isLoading', false)
}

export const failure = (state = INITIAL_STATE, action) => {
  return state.set('error', action.payload).set('isLoading', false)
}

const ACTION_HANDLERS = {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.CODE_GET_REQUEST]: request,
  [Types.CODE_GET_SUCCESS]: success,
  [Types.CODE_GET_FAILURE]: failure,
  [Types.CODE_CHECK_REQUEST]: request,
  [Types.CODE_CHECK_SUCCESS]: success,
  [Types.CODE_CHECK_FAILURE]: failure,
  [Types.SIGNUP_REQUEST]: request,
  [Types.SIGNUP_SUCCESS]: success,
  [Types.SIGNUP_FAILURE]: failure,
  [Types.PASSWORD_CHANGE_REQUEST]: request,
  [Types.PASSWORD_CHANGE_SUCCESS]: success,
  [Types.PASSWORD_CHANGE_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
