import React from 'react'
import { Redirect, Route } from 'react-router'
import { user } from 'helpers/user'
import { url } from 'helpers/url'
import PageHeader from 'components/Shared/PageHeader'
import LogoIcon from 'components/Icons/LogoIcon'
import LogoTitle from 'components/Shared/LogoTitle'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import RightMenu from 'components/RightMenu/RightMenu'
import Search from 'components/Search/Search'
import SidebarContainer from 'containers/SidebarContainer'
import Content from 'components/Content/Content'
import NotificationComponent from 'components/Notification/NotificationComponent'
import ProfileContainer from 'containers/ProfileContainer'
import 'components/App/App.scss'
import UserMenu from 'components/UserMenu'

const PrivateRoute = ({ component: Component, ...rest }) => <Route
  {...rest}
  render={props => user.isAuthenticated() ?
    <div className="application">
      <PageHeader>
        <LogoIcon className="application__logo"/>
        <LogoTitle className="logotitle">CareerLark</LogoTitle>
        <HeaderMenu/>
        <RightMenu>
          <Search/>
          <UserMenu/>
        </RightMenu>
      </PageHeader>
      <div className="bottom">
        <SidebarContainer/>
        <Content>
          <Component {...props}/>
        </Content>
      </div>
      <NotificationComponent/>
      <ProfileContainer/>
    </div>

    : <Redirect to={{
      pathname: url.login(),
      state: { from: props.location },
    }}/>}/>


export default PrivateRoute