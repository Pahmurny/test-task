import React from 'react'
import PropTypes from 'prop-types'
import m from 'moment'
import cn from 'classnames'
import GreyBlock from 'components/Shared/GreyBlock'
import { feedbackHeader } from 'components/FeedbacksList/FeedbacksList'
import { MODULE_VIEW_COMPANY } from 'routes/feedback/feedbackTypes'
import HashButton from 'components/Buttons/HashButton'
import isFunction from 'lodash/isFunction'
import './fromtofeedback.scss'
import LockIcon from 'components/Icons/LockIcon'


const FromToFeedback = (props) => {
  const { user, to, date, content, tags, className, render, children, headerView = MODULE_VIEW_COMPANY } = props

  return <GreyBlock className={cn('fromtofeedback', className)}>
    <div className="fromtofeedback__header">
      <div className="fromtofeedback__users">
        {render ? render(props) : feedbackHeader[headerView]({ user, to })}
      </div>
      <div className="fromtofeedback__feedback-date">
        <LockIcon style={{ marginRight: 6 }}/>
        <span style={{ marginRight: 6 }}> Private | </span>
        {m(date).format('MMM DD, YYYY')}
      </div>
    </div>
    <div className="fromtofeedback__content">
      {children ? (isFunction(children) ? children(props) : children) : content}
    </div>
    <div className="fromtofeedback__hash-tags">{tags.map((tag, key) => <HashButton className={'hash-item'}
                                                                                   key={key}>{tag}</HashButton>)}</div>
  </GreyBlock>
}


FromToFeedback.displayName = 'FromToFeedback'
FromToFeedback.propTypes = {
  from: PropTypes.object,
  to: PropTypes.object,
  className: PropTypes.string,
}


export default FromToFeedback