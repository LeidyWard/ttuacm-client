import PropTypes from 'prop-types'
import React from 'react'

import Auth from './components/Auth.jsx'


// Handles requests to the server during production and fetching mocks in development
class AuthContainer extends React.Component {
  state = {
    logErr: '', // Login Error
    regErr: '', // Registration Error
    waiting: false,
  }

  handleLogin = () => null

  handleRegister = () => null

  render() {
    return (
      <Auth
        handleRegister={this.handleRegister}
        handleLogin={this.handleLogin}
        authCancelled={this.props.authCancelled}
        regErr={this.state.regErr}
        logErr={this.state.logErr}
        waiting={this.state.waiting}
      />
    )
  }
}


AuthContainer.propTypes = {
  authCancelled: PropTypes.func.isRequired,
}

export default AuthContainer
