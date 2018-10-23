import React from 'react'
import { hot } from 'react-hot-loader'

const style = {
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif',
}

/**
 * Main stateless component
 */
const App = () => (
  <div style={style} className='App'>Hello World</div>
)

export default hot(module)(App)
