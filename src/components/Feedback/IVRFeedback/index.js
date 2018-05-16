import React from 'react'
import m from 'moment'
import r from 'lodash/random'
import cn from 'classnames'
import './ivrfeedback.scss'
import UserPic from 'components/Shared/UserPic'
import CloseGreyIcon from 'components/Icons/CloseGreyIcon'
import AboutBlock from 'components/Feedback/AboutBlock'
import fakeUsers from './_fakeUsers'
import MultipleUsers from 'components/Shared/MultipleUsers'


const fakeShow = () => r(0, 1)

const IVRFeedback = ({ className, ...rest }) => {
  const fShow = !!fakeShow()

  return <div className={cn('ivr-feedback', className)}>
    <div className="ivr-feedback__header">
      <div className="ivr-feedback__header-user">
        {!fShow && <UserPic image={rest.user.image} className={'user-image'}/>}
        {fShow && <MultipleUsers users={fakeUsers}/>}
        {!fShow && <div className="user-name">{rest.user.name}</div>}
      </div>
      <div className="ivr-feedback__header-actions">
        {m(rest.date).format('MMM DD, YYYY')}
        <div className="ivr-feedback__header-close">
          <CloseGreyIcon/>
        </div>
      </div>
    </div>
    <div className="ivr-feedback__request">
      <AboutBlock image={rest.user.image} name={rest.user.name} className={'about-block'}/>
      Request: Any thoughts on the analytics portion of the exec review?
    </div>
    <div className="ivr-feedback__content">
      {rest.content}
    </div>
  </div>
}


export default IVRFeedback