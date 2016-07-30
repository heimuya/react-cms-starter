import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

export default UserAuthWrapper({
  authSelector: (state) => state.auth,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserAuthCheck',
  failureRedirectPath: '/',
  predicate: (auth) => {
    auth && auth.profile ? auth.profile : false
  }
})
