import { createTypes } from 'reduxsauce'

export default createTypes(`
  COUNTER_INCREMENT
  DOUBLE_INCREMENT

  LOGIN_REQUEST
  LOGIN_SUCCESS
  LOGIN_FAILURE

  CODE_GET_REQUEST
  CODE_GET_SUCCESS
  CODE_GET_FAILURE

  CODE_CHECK_REQUEST
  CODE_CHECK_SUCCESS
  CODE_CHECK_FAILURE

  SIGNUP_REQUEST
  SIGNUP_SUCCESS
  SIGNUP_FAILURE

  PASSWORD_CHANGE_REQUEST
  PASSWORD_CHANGE_SUCCESS
  PASSWORD_CHANGE_FAILURE

  LOGOUT_REQUEST
  LOGOUT_SUCCESS
  LOGOUT_FAILURE
`)
