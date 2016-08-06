import { injectReducer } from '../store/reducers'

// Sync route definition
export default (store) => ({
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const HomeContainer = require('../containers/Home').default
      const reducer = require('../reducers/home').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'auth', reducer })

      /*  Return getComponent   */
      cb(null, HomeContainer)

    /* Webpack named bundle   */
    }, 'auth')
  }
})
