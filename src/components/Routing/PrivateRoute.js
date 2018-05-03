import React, { Component } from 'react'
import { Redirect, Route } from 'react-router'
import { user } from 'helpers/user'
import { url } from 'helpers/url'


class PrivateRoute extends Component {


  render() {
    const { component: Component, ...rest } = this.props

    return <Route
      {...rest}
      render={props => user.isAuthenticated() ? <Component {...props}/> : <Redirect to={{
        pathname: url.login(),
        state: { from: props.location },
      }}/>}/>
  }
}


export default PrivateRoute