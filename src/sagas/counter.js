import { takeLatest, delay } from 'redux-saga'
import { put, select, fork } from 'redux-saga/effects'
import Types from '../constants'
import Actions from '../actions/index'

function *count() {
  // make the call to the api
  const counter = yield select((state) => state.counter)
  yield delay(1000)
  yield put(Actions.increment(counter.count))
}

function *watcher() {
  yield* takeLatest(Types.DOUBLE_INCREMENT, count)
}

export default function *() {
  yield fork(watcher)
}
