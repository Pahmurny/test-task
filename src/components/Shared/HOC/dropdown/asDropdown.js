import React, { Component } from 'react'
import PropTypes from 'prop-types'

const asDropdown = (WrappedComponent) => class extends Component {

    state = {
        isActive: false,
    }

    render(){
        return <div className="as-dropdown">
            <WrappedComponent/>
        </div>
    }
}


export default asDropdown