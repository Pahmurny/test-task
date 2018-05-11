import React, { Component } from 'react'
import { user } from 'helpers/user'
import { Redirect } from 'react-router'


const fakeUser = {
  id: 1,
  userName: 'somename',
  userPassword: '1234567890',
}


class Login extends Component {


  state = {
    isLogged: false,
  }


  logIn = () => {
    user.logIn(fakeUser)
    this.setState({ isLogged: true })
  }

  render() {
    const { isLogged } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (isLogged || user.isAuthenticated()) {
      return <Redirect to={from}/>
    }

    return <button onClick={this.logIn}>login</button>

  }
}


export default Login