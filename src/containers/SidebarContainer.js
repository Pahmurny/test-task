import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SidebarNavigation from 'components/Sidebar/SidebarNavigation'
import { url } from 'helpers/url'
import { MODULE_VIEW_COMPANY } from 'routes/feedback/feedbackTypes'
import CompanySidebar from 'containers/CompanySidebar'
import Sidebar from 'components/Sidebar/Sidebar'

const sidebarNavigation2 = [
    {
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


]
const sidebarNavigation1 = [
    {
        title: '1:1s',
        url: '#1:1',
        badge: 2,
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
    },]


const sidebarView = {
    [MODULE_VIEW_COMPANY]: CompanySidebar,
}


class SidebarContainer extends Component {


    getSideBar = () => {
        const { filter } = this.props
        let moduleView = -1
        if (filter) {
            moduleView = filter.moduleView
        }
        return sidebarView[moduleView] ? sidebarView[moduleView](this.props) : <React.Fragment>
            <SidebarNavigation items={sidebarNavigation1}/>
            <SidebarNavigation items={sidebarNavigation2}/>
        </React.Fragment>
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


export default connect(({ feedbacks }) => ({ ...feedbacks }))(SidebarContainer)