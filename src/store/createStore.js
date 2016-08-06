import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import SagaManager from '../sagas/SagaManager'
import makeRootReducer from './reducers'

export default (initialState = {}, history) => {
  const sagaMiddleware = createSagaMiddleware()
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [sagaMiddleware, routerMiddleware(history)]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
    module.hot.accept('../sagas/SagaManager', () => {
      SagaManager.cancelSagas(store)
      require('../sagas/SagaManager').default.startSagas(sagaMiddleware)
    })
  }

  SagaManager.startSagas(sagaMiddleware)

  return store
}
