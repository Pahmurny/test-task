import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './halfpage.scss'

/**
 * Container for a page which usually has tabs and greyed title (Admin Settings, Admin Reviews)
 * @param children
 * @param title
 * @param className
 * @param rest
 * @returns {*}
 * @constructor
 */
const HalfPage = ({ children, title = 'Settings', className, ...rest }) => <div
  className={cn('halfpage-container', className)} {...rest}>
  <h2 className={`halfpage-container__header`}>{title}</h2>
  {children}
</div>


HalfPage.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string
}

export default HalfPage