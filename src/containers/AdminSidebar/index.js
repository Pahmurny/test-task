import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SidebarNavigation from 'components/Sidebar/SidebarNavigation'
import { url } from 'helpers/url'


const AdminSidebar = () => <div>
    <SidebarNavigation items={[
        {
            title: 'People',
            url: '#',
        },
        {
            title: 'Settings',
            url: url.adminSettings(),
        },
    ]}/>
</div>


export default AdminSidebar