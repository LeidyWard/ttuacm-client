import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import logger from 'utils/logger'
import registerServiceWorker from 'registerServiceWorker'

import App from './App.jsx'
import MaintainanceScreen from './MaintainanceScreen.jsx'

const {
  NODE_ENV,
  REACT_APP_environment_connection,
  REACT_APP_secret_password,
} = process.env

if (NODE_ENV === 'development') logger.info('In development mode')

function ConditionalRender(Component) {
  ReactDOM.render(<Component />, document.getElementById('root'))
}


// Calls the firebase environment service to grab the env variables
axios.get(`${REACT_APP_environment_connection}/${REACT_APP_secret_password}`)
  .then(({ data }) => {
    // If we are not undergoing maintainance
    if (data.maintainance !== 'true') {
      ConditionalRender(App)
    } else {
      ConditionalRender(MaintainanceScreen)
    }
  })
  .catch(() => {
    ConditionalRender(MaintainanceScreen)
  })


registerServiceWorker()
