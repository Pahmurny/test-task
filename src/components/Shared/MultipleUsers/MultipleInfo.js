import React from 'react'
import PropTypes from 'prop-types'
import './multipleinfo.scss'

const MultipleInfo = ({ users, position }) => <div
  className="multiple-info"
  style={{ ...position }}
  dangerouslySetInnerHTML={{ __html: '<span>Requested from:</span><br/>'+users.map(user => user.name).join('<br/>') }}/>

MultipleInfo.propTypes = {
  users: PropTypes.array,
}


export default MultipleInfo
