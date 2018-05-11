import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SearchIco from 'components/Icons/SearchIcon'
import Shevron from 'components/Icons/Shevron'
import { user } from 'helpers/user'
import { url } from 'helpers/url'
import './usermenu.scss'


class UserMenu extends Component {

  state = {
    active: false,
  }

  logOut = () => {
    const { history: { replace } } = this.props
    user.logOut()
    replace(url.main())
  }

  render() {
    const { active } = this.state

    return <div className="user-menu">
      <div className="user-menu__username">{user.getName()}</div>
      <SearchIco className={'user-menu__action'} onClick={() => this.setState({ active: !active })}>
        <Shevron fill="#fff" className="user-menu__action-ico"/>
      </SearchIco>
      {active && <div className="user-menu__actions">
        <div className="user-menu__action-item">My Public Profile</div>
        <div className="user-menu__action-item">Account Settings</div>
        <div className="user-menu__action-item" onClick={this.logOut}>Log out</div>
      </div>}
    </div>
  }
}


export default withRouter(UserMenu)