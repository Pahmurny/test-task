import React  from 'react'
import { Route } from 'react-router-dom'
import PublicHeader from 'components/PublicHeader'

const PublicRoute = ({ component: Component, ...rest }) => <Route {...rest} render={props => <React.Fragment>
  <PublicHeader/>
  <Component {...props}/>
</React.Fragment>}/>

export default PublicRoute
