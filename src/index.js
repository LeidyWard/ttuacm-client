import React from 'react'
import ReactDOM from 'react-dom'

import logger from 'utils/logger'
import registerServiceWorker from 'registerServiceWorker'

import App from './App.jsx'


if (process.env.NODE_ENV === 'development') logger.info('In development mode')

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
