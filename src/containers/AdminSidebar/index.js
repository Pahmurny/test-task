import React from 'react'
import SidebarNavigation from 'components/Sidebar/SidebarNavigation'
import { url } from 'helpers/url'
import './adminSidebar.scss'


const navs = [
  [
    {
      title: 'People',
      url: url.adminPeople(),
    },
    {
      title: 'Settings',
      url: url.adminSettings(),
    },
    {
      title: 'Feedback',
      url: url.admin(),
    },
    {
      title: 'Reviews',
      url: url.adminReviews(),
    },
    {
      title: 'Help',
      url: '#help',
    },
  ],
  [
    {
      title: 'Terms & Privacy',
      url: '#terms_privacy',
    },
  ],
]

const AdminSidebar = () => <div className="admin-sidebar">
  <div className="admin-sidebar__section top">
    <SidebarNavigation items={navs[0]}/>
  </div>
  <div className="admin-sidebar__section bottom">
    <SidebarNavigation items={navs[1]}/>
  </div>
</div>


export default AdminSidebar