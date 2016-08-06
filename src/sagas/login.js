import { takeLatest } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import Types from '../constants'
import Actions from '../actions/index'

// api
import api from '../config/server'

function *login(action) {
  // make the call to the api
  const response = yield call(api.login, action.payload)

  if (response.ok && response.data.status.code === 200) {
    yield put(Actions.loginSuccess(response.data.result))
  } else {
    yield put(Actions.loginFailure(response.data.status))
  }
}

function *logout(action) {
  yield put(Actions.logoutSuccess(action.payload))
}

function *watcher() {
  yield* takeLatest(Types.LOGIN_REQUEST, login)
  yield* takeLatest(Types.LOGOUT_REQUEST, logout)
}

export default function *() {
  yield fork(watcher)
}
