import React from 'react'
import { hot } from 'react-hot-loader'

const style = {
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif',
}

/**
 * Root of Component Tree
 */
const App = () => (
  <div style={style} className='App'>ACM Texas Tech</div>
)

export default hot(module)(App)
