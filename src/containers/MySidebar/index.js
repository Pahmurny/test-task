import React from 'react'
import './mysidebar.scss'
import SidebarNavigation from 'components/Sidebar/SidebarNavigation'
import { url } from 'helpers/url'


const navs = [
  [
    {
      title: 'Dashboard',
      url: '#1:1',
      badge: 4,
    },
    {
      title: 'Feedback',
      url: url.main(),

    },
    {
      title: 'Reviews',
      url: '#reviews',
    },
  ],
  [
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

const MySidebar = () => <div className="my-sidebar">
  <div className="my-sidebar__section top">
    <SidebarNavigation items={navs[0]}/>
  </div>
  <div className="my-sidebar__section middle">
    <SidebarNavigation items={navs[1]}/>
  </div>
  <div className="my-sidebar__section bottom">
    <SidebarNavigation items={navs[2]}/>
  </div>
</div>


export default MySidebar