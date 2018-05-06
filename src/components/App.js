import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Content from 'components/Content/Content'
import FeedbackModule from 'routes/feedback/FeedbackModule'
import TeamModule from 'routes/team/TeamModule'
import PageHeader from 'components/Shared/PageHeader'
import LogoIcon from 'components/Icons/LogoIcon'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import { url } from 'helpers/url'
import CompanyModule from 'routes/company/CompanyModule'
import AdminModule from 'routes/admin/AdminModule'
import SettingsModule from 'routes/adminSettings/SettingsModule'
import SidebarContainer from 'containers/SidebarContainer'
import PeopleContainer from 'routes/adminPeople/components/PeopleContainer'
import NotificationComponent from 'components/Notification/NotificationComponent'
import CompanyPeople from 'routes/companyPeople/CompanyPeople'
import LogoTitle from 'components/Shared/LogoTitle'
import 'reset-css/_reset.scss'
import './App.scss'
import RightMenu from 'components/RightMenu/RightMenu'
import Search from 'components/Search/Search'
import PrivateRoute from 'components/Routing/PrivateRoute'
import Login from 'containers/Login'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="application">
          <PageHeader>
            <LogoIcon className="application__logo"/>
            <LogoTitle className="logotitle">CareerLark</LogoTitle>
            <HeaderMenu/>
            <RightMenu>
              <Search/>
            </RightMenu>
          </PageHeader>
          <div className="bottom">
            <SidebarContainer/>
            <Content>
              <Switch>
                <PrivateRoute exact path={url.main()} component={FeedbackModule}/>
                <PrivateRoute exact path={url.team()} component={TeamModule}/>
                <PrivateRoute exact path={url.company()} component={CompanyModule}/>
                <PrivateRoute exact path={url.companyPeople()} component={CompanyPeople}/>
                <PrivateRoute exact path={url.admin()} component={AdminModule}/>
                <PrivateRoute exact path={url.adminSettings()} component={SettingsModule}/>
                <PrivateRoute exact path={url.adminPeople()} component={PeopleContainer}/>
                <Route exact path={url.login()} component={Login}/>
              </Switch>
            </Content>
          </div>
          <NotificationComponent/>
        </div>
      </Router>
    )
  }
}


export default App
