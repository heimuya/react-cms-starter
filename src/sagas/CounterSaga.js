import { takeEvery } from 'redux-saga'
import { put, select } from 'redux-saga/effects'
import Types from '../constants'
import Actions from '../actions/index'

export default () => {
  function *count(action) {
    // make the call to the api
    const counter = yield select((state) => state.counter)

    yield put(Actions.increment(counter.count))
  }

  function *watcher() {
    yield* takeEvery(Types.DOUBLE_INCREMENT, count)
  }

  return {
    watcher,
    count
  }
}
