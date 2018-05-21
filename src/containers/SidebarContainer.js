import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  MODULE_VIEW_ADMIN,
  MODULE_VIEW_ADMIN_PEOPLE,
  MODULE_VIEW_ADMIN_REVIEWS,
  MODULE_VIEW_ADMIN_SETTINGS,
  MODULE_VIEW_COMPANY,
  MODULE_VIEW_COMPANY_PEOPLE,
  MODULE_VIEW_FEEDBACK,
} from 'routes/feedback/feedbackTypes'
import CompanySidebar from 'containers/CompanySidebar'
import AdminSidebar from 'containers/AdminSidebar'
import Sidebar from 'components/Sidebar/Sidebar'
import MySidebar from 'containers/MySidebar'


const sidebarView = {
  [MODULE_VIEW_FEEDBACK]: () => <MySidebar/>,
  [MODULE_VIEW_COMPANY]: CompanySidebar,
  [MODULE_VIEW_COMPANY_PEOPLE]: CompanySidebar,
  [MODULE_VIEW_ADMIN]: AdminSidebar,
  [MODULE_VIEW_ADMIN_SETTINGS]: AdminSidebar,
  [MODULE_VIEW_ADMIN_PEOPLE]: AdminSidebar,
  [MODULE_VIEW_ADMIN_REVIEWS]: AdminSidebar,
}

const Empty = () => <div/>


class SidebarContainer extends Component {


  getSideBar = () => {
    const { moduleView } = this.props
    if (!moduleView) {
      return <Empty/>
    }

    const SidebarView = sidebarView[moduleView] ? sidebarView[moduleView] : Empty

    /**
     * Make Sidebar View available in debugger
     * @type {string}
     */
    SidebarView.displayName = 'SidebarView'

    return <SidebarView {...this.props}/>
  }

  render() {
    const SidebarView = this.getSideBar()

    return (
      <Sidebar className={'sidebar'}>
        {SidebarView}
      </Sidebar>
    )
  }

}


export default connect(({ common }) => ({ ...common }))(SidebarContainer)