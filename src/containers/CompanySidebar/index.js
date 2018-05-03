import React from 'react'
import { url } from 'helpers/url'
import SidebarNavigation from 'components/Sidebar/SidebarNavigation'

const CompanySidebar = () => <div>
  <SidebarNavigation items={[
    {
      title: 'People',
      url: url.companyPeople(),
    },
  ]}/>

  <SidebarNavigation items={[
    {
      title: 'Feedback',
      url: url.company(),
    },
  ]}/>
</div>


export default CompanySidebar