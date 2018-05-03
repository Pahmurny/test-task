import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SidebarNavigation from 'components/Sidebar/SidebarNavigation'
import { url } from 'helpers/url'
import {
    MODULE_VIEW_ADMIN, MODULE_VIEW_ADMIN_PEOPLE, MODULE_VIEW_ADMIN_SETTINGS, MODULE_VIEW_COMPANY,
    MODULE_VIEW_COMPANY_PEOPLE,
    MODULE_VIEW_FEEDBACK,
} from 'routes/feedback/feedbackTypes'
import CompanySidebar from 'containers/CompanySidebar'
import AdminSidebar from 'containers/AdminSidebar'
import Sidebar from 'components/Sidebar/Sidebar'
import MySidebar from 'containers/MySidebar'

 const sidebarNavigation2 = [
/*    {
        title: '1:1s',
        url: '#1:1',
    },

    {
        title: 'Feedback',
        url: url.main(),
    },
    {
        title: 'Goals',
        url: '#goals',
    },
    {
        title: 'Help',
        url: '#help',
    },
    {
        title: 'Documents',
        url: '#documents',
    },
*/

] 

const sidebarNavigation1 = [
    {
        title: 'Dashboard',
        url: '#1:1',
        badge: 4,
    },
    {
        title: 'Feedback',
        url: url.main(),

    },
/*    {
        title: 'Goals',
        url: '#goals',
    },
    {
        title: 'Help',
        url: '#help',
    },
    {
        title: 'Documents',
        url: '#documents',
    }, */
    ]


const sidebarView = {
    [MODULE_VIEW_FEEDBACK]: () => <MySidebar/>,
    [MODULE_VIEW_COMPANY]: CompanySidebar,
    [MODULE_VIEW_COMPANY_PEOPLE]: CompanySidebar,
    [MODULE_VIEW_ADMIN]: AdminSidebar,
    [MODULE_VIEW_ADMIN_SETTINGS]: AdminSidebar,
    [MODULE_VIEW_ADMIN_PEOPLE]: AdminSidebar,
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