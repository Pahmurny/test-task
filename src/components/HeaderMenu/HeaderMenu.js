import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { url } from 'helpers/url'
import './headerMenu.scss'

/**
 * Menu in the app header
 * @returns {*}
 * @constructor
 */
const HeaderMenu = () => <div className="header-menu">
    <Link
        exact
        activeClassName={'active'}
        className={'header-menu__link'}
        to={url.main()}
    >You</Link>
    <Link
        exact
        activeClassName={'active'}
        className={'header-menu__link'}
        to={url.team()}
    >Your team</Link>
    <Link
        exact
        activeClassName={'active'}
        className={'header-menu__link'}
        to={url.company()}
    >Company</Link>
    <Link
        exact
        activeClassName={'active'}
        className={'header-menu__link'}
        to={url.admin()}
    >Admin</Link>
</div>

export default HeaderMenu