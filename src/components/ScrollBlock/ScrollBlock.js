import React from 'react'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars'


/**
 * The ScrollBlock - Block with scroll bars
 * @param children
 * @param autoHeight
 * @param props
 * @returns {*}
 * @constructor
 */
const ScrollBlock = ({ children, autoHeight, ...props }) => <Scrollbars autoHeight={autoHeight} {...props}>
    {children}
</Scrollbars>

ScrollBlock.propTypes = {
    children: PropTypes.any,
    autoHeight: PropTypes.bool
}

ScrollBlock.defaultProps = {
    autoHeight: false
}

export default ScrollBlock
