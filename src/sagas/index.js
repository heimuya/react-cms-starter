import { fork } from 'redux-saga/effects'
import loginSaga from './LoginSaga'
import counterSaga from './CounterSaga'

export default function *root() {
  // start fork function
  yield fork(loginSaga().watcher)
  yield fork(counterSaga().watcher)
}
