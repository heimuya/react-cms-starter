import { injectReducer } from '../../store/reducers'
import HomeView from './components/HomeView'

// Sync route definition
export default (store) => ({
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const reducer = require('./reducers/index').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'auth', reducer })

      /*  Return getComponent   */
      cb(null, HomeView)

    /* Webpack named bundle   */
    }, 'auth')
  }
})
