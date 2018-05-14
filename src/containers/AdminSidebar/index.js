import React from 'react'
import SidebarNavigation from 'components/Sidebar/SidebarNavigation'
import { url } from 'helpers/url'


const AdminSidebar = () => <div>
  <SidebarNavigation items={[
    {
      title: 'People',
      url: url.adminPeople(),
    },
    {
      title: 'Settings',
      url: url.adminSettings(),
    },
  ]}/>

  <SidebarNavigation items={[
    {
      title: 'Feedback',
      url: url.admin(),
    },
  ]}/>
</div>


export default AdminSidebar