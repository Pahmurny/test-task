import React, { Component } from 'react'

const asDropdown = (WrappedComponent) => class extends Component {

  state = {
    isActive: false,
  }

  render() {
    return <div className="as-dropdown">
      <WrappedComponent/>
    </div>
  }
}


export default asDropdown