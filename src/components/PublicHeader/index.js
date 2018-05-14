import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import './publicHeader.scss'
import PublicLogo from 'components/Icons/PublicLogo'
import { url } from 'helpers/url'

const PublicHeader = () => <div className="public-header">
  <div className="public-header__side public-header__left">
    <PublicLogo/>
    <h2 className="public-header__title">CareerLark</h2>

    <div className="public-header__menu">
      <Link exact className="public-header__menu-item" to={'/#home'}>Home</Link>
      <Link exact className="public-header__menu-item" to={'/#micro-feedback'}>Micro-feedback</Link>
      <Link exact className="public-header__menu-item" to={'/#ice-breakers'}>Icebreakers</Link>
      <Link exact className="public-header__menu-item" to={'/#faq'}>FAQ</Link>
      <Link exact className="public-header__menu-item" to={'/#about'}>About</Link>
      <Link exact className="public-header__menu-item" to={'/#resources'}>Resources</Link>
    </div>
  </div>
  <div className="public-header__side public-header__right">
    <Link exact className="public-header__menu-item" to={url.signup()}>Sign up</Link>
    <Link exact className="public-header__menu-item" to={url.login()}>Login</Link>
  </div>
</div>


PublicHeader.displayName = 'PublicHeader'


export default PublicHeader