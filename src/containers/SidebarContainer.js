import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SidebarNavigation from 'components/Sidebar/SidebarNavigation'
import { url } from 'helpers/url'
import {
    MODULE_VIEW_ADMIN, MODULE_VIEW_ADMIN_PEOPLE, MODULE_VIEW_ADMIN_SETTINGS, MODULE_VIEW_COMPANY,
    MODULE_VIEW_FEEDBACK,
} from 'routes/feedback/feedbackTypes'
import CompanySidebar from 'containers/CompanySidebar'
import AdminSidebar from 'containers/AdminSidebar'
import Sidebar from 'components/Sidebar/Sidebar'

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
    [MODULE_VIEW_FEEDBACK]: () => <React.Fragment>
        <SidebarNavigation items={sidebarNavigation1}/>
        <SidebarNavigation items={sidebarNavigation2}/>
    </React.Fragment>,
    [MODULE_VIEW_COMPANY]: CompanySidebar,
    [MODULE_VIEW_ADMIN]: AdminSidebar,
    [MODULE_VIEW_ADMIN_SETTINGS]: AdminSidebar,
    [MODULE_VIEW_ADMIN_PEOPLE]: AdminSidebar,
}


class SidebarContainer extends Component {


    getSideBar = () => {
        const { moduleView } = this.props
        if (!moduleView) {
            return null
        }
        return sidebarView[moduleView] ? sidebarView[moduleView](this.props) : null
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