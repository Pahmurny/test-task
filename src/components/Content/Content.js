import React from 'react'
import PropTypes from 'prop-types'
import './content.scss'

const Content = ({ children }) => <div className="content">
    {children}
</div>


Content.propTypes = {
    children: PropTypes.any,
}


export default Content