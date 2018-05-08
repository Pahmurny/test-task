import React from 'react'
import PropTypes from 'prop-types'
import m from 'moment'
import cn from 'classnames'
import GreyBlock from 'components/Shared/GreyBlock'
import { feedbackHeader } from 'components/FeedbacksList/FeedbacksList'
import { MODULE_VIEW_COMPANY } from 'routes/feedback/feedbackTypes'
import HashButton from 'components/Buttons/HashButton'
import './fromtofeedback.scss'


const FromToFeedback = ({ user, to, date, content, tags, className }) => <GreyBlock className={cn('fromtofeedback', className)}>
  <div className="fromtofeedback__header">
    <div className="fromtofeedback__users">
      {feedbackHeader[MODULE_VIEW_COMPANY]({ user, to })}
    </div>
    <div className="fromtofeedback__feedback-date">
      {m(date).format('MM/DD/YYYY')}
    </div>
  </div>
  <div className="fromtofeedback__content">
    {content}
  </div>
  <div className="fromtofeedback__hash-tags">{tags.map((tag, key) => <HashButton className={'hash-item'} key={key}>{tag}</HashButton>)}</div>
</GreyBlock>


FromToFeedback.displayName = 'FromToFeedback'
FromToFeedback.propTypes = {
  from: PropTypes.object,
  to: PropTypes.object,
  className: PropTypes.string
}


export default FromToFeedback