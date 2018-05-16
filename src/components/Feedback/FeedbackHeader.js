import React, { Fragment } from 'react'
import { user as userObj } from 'helpers/user'
import UserPic from 'components/Shared/UserPic'

const FeedbackHeader = ({ user, to }) => <Fragment>
  <UserPic image={user.image} style={{ marginRight: 10 }}/>
  <div className={'feedback-username'}>{user.name}</div>
  {userObj.getId() === user.id && <span style={{ color: '#9B9B9B', margin: '0 5px' }}>(you)</span>}
  <span style={{ marginRight: 10, color: '#23182D' }}>►</span>
  <UserPic image={to.user.image} style={{ marginRight: 10 }}/>
  <div className={'feedback-username'}>{to.user.name}</div>
  {userObj.getId() === to.user.id && <span style={{ color: '#9B9B9B', margin: '0 5px' }}>(you)</span>}
</Fragment>


export default FeedbackHeader