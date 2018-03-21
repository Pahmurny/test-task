import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserPic from 'components/Shared/UserPic'
import './fromToTitle.scss'

const FromToTitle = (props) => {
  const { user, to:t, requester } = props

  let from = { user }
  let to = { ...t }
  if (requester) {
    from = requester
    to = { user }
  }

  return (
      <React.Fragment>
        <div className="from-title">
          <UserPic image={from.user.image}/>
          <div className="from-title__user-name">{from.user.name}</div>
          <div className="from-title__to">►</div>
          <UserPic image={to.user.image}/>
          <div className="from-title__user-name">{to.user.name}</div>
        </div>
      </React.Fragment>
  )
}


export default FromToTitle