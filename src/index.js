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
} = process.env

if (NODE_ENV === 'development') logger.info('In development mode')

function ConditionalRender(Component) {
  ReactDOM.render(<Component />, document.getElementById('root'))
}

// If we are in a production environment,
// we will build without environment variables
const connectionString = (
  REACT_APP_environment_connection
  || 'https://acm-texas-tech-web-app-2.firebaseapp.com/environment/get-environment'
)

// Calls the firebase environment service to
// grab the env variables and checks for maintainance
axios.get(connectionString)
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
