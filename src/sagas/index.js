import { fork } from 'redux-saga/effects'

// use require.context to load all needed sagas
const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js' && item !== './SagaManager.js')

export default function *root() {
  for (let i = 0; i < keys.length; i ++) {
    yield fork(context(keys[i]).default)
  }
}
