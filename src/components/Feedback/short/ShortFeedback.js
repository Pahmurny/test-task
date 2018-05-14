import React from 'react'
import cn from 'classnames'
import m from 'moment'
import store from 'store'
import './shortfeedback.scss'
import UserPic from 'components/Shared/UserPic'
import EditIcon from 'components/Icons/EditIcon'
import setValue from 'routes/feedback/actions/setValue'

const NoUser = ({ sign = '&mdash;' }) => <div dangerouslySetInnerHTML={{ __html: sign }}/>


const ShortFeedback = (props) => {
  const { user, to, last, date, requester } = props

  return (
    <div className={cn('short-feedback', { last })}>
      <div className="short-feedback__item">
        <div className="short-feedback__item-date">
          {m(date).format('MMM DD, YYYY')}
          <div className="short-feedback__item-date-time">
            {m(date).format('hh:mm A')}
          </div>
        </div>
      </div>
      <div className="short-feedback__item">
        {!requester ? <NoUser/> : <React.Fragment>
          <UserPic image={requester.user.image}/>
          <div className="short-feedback__item-name">
            {requester.user.name}
          </div>
        </React.Fragment>}
      </div>
      <div className="short-feedback__item">
        {!user ? <NoUser/> : <React.Fragment>
          <UserPic image={user.image}/>
          <div className="short-feedback__item-name">
            {user.name}
          </div>
        </React.Fragment>}
      </div>
      <div className="short-feedback__item">
        {!to ? <NoUser/> : <React.Fragment>
          <UserPic image={to.user.image}/>
          <div className="short-feedback__item-name">
            {to.user.name}
          </div>
        </React.Fragment>}
      </div>

      <div className="short-feedback__item last">
        <EditIcon onClick={() => store.dispatch(setValue('feedbackInfo', props))}/>
      </div>
    </div>
  )
}

export default ShortFeedback