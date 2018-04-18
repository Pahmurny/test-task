import React from 'react'
import PropTypes from 'prop-types'
import {  NavLink as Link } from 'react-router-dom'
import './sidebarNavigation.scss'
import Badge from 'components/Shared/Badge'


const SidebarNavigation = ({ items, activeClass = 'active'}) => <ul className={'sidebar-navigation'}>
    {
        items.map((item, key) => <li key={key} className="sidebar-navigation__item">
            <Link
                to={item.url}
                exact
                activeClassName={activeClass}
            >{item.title}</Link>
            {item.badge && <Badge>{item.badge}</Badge>}
            </li>)
    }
</ul>


SidebarNavigation.propTypes = {
    activeClass: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            url: PropTypes.string
        })
    )
}



export default SidebarNavigation