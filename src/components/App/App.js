import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import FeedbackModule from 'routes/feedback/FeedbackModule'
import TeamModule from 'routes/team/TeamModule'
import { url } from 'helpers/url'
import CompanyModule from 'routes/company/CompanyModule'
import AdminModule from 'routes/admin/AdminModule'
import SettingsModule from 'routes/adminSettings/SettingsModule'
import PeopleContainer from 'routes/adminPeople/components/PeopleContainer'
import CompanyPeople from 'routes/companyPeople/CompanyPeople'
import 'reset-css/_reset.scss'
import PublicRoute from 'components/Routing/PublicRoute'
import PrivateRoute from 'components/Routing/PrivateRoute'
import Login from 'containers/Login'
import { history } from 'store'


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path={url.main()} component={FeedbackModule}/>
          <PrivateRoute exact path={url.team()} component={TeamModule}/>
          <PrivateRoute exact path={url.company()} component={CompanyModule}/>
          <PrivateRoute exact path={url.companyPeople()} component={CompanyPeople}/>
          <PrivateRoute exact path={url.admin()} component={AdminModule}/>
          <PrivateRoute exact path={url.adminSettings()} component={SettingsModule}/>
          <PrivateRoute exact path={url.adminPeople()} component={PeopleContainer}/>
          <PublicRoute exact path={url.login()} component={Login}/>
        </Switch>
      </Router>
    )
  }
}


export default App
