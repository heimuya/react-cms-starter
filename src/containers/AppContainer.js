import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

// localization
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import zhCN from 'i18n/zh_cn'

addLocaleData([...en, ...zh])

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render () {
    const { history, routes, store } = this.props

    return (
      <Provider store={store}>
        <IntlProvider locale={navigator.language} messages={zhCN}>
          <div style={{ height: '100%' }}>
            <Router history={history} children={routes} />
          </div>
        </IntlProvider>
      </Provider>
    )
  }
}

export default AppContainer
