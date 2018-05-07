import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import Feedback from 'components/Feedback/Feedback'
import './feedbacksLists.scss'
import { MODULE_VIEW_COMPANY } from 'routes/feedback/feedbackTypes'
import UserPic from 'components/Shared/UserPic'
import { IsDev } from 'helpers/dev'

/**
 * Default Feedback header view
 *
 * @param user
 * @returns {*}
 */
const defaultView = ({ user }) => <Fragment>
  <UserPic image={user.image} style={{ marginRight: 10 }}/>
  <div className={'feedback-username'}>{user.name}</div>
  {(user.manager || IsDev()) && <div className="grey">(your manager)</div>}
</Fragment>

/**
 * Header of the Feedback item depends on Module view
 * @type
 */
export const feedbackHeader = {
  [MODULE_VIEW_COMPANY]: ({ user, to }) => {
    return (
      <Fragment>
        <UserPic image={user.image} style={{ marginRight: 10 }}/>
        <div className={'feedback-username'}>{user.name}</div>
        <span style={{ color: '#9B9B9B', margin: '0 5px' }}>(you)</span>
        <span style={{ marginRight: 10, color: '#23182D' }}>►</span>
        <UserPic image={to.user.image} style={{ marginRight: 10 }}/>
        <div className={'feedback-username'}>{to.user.name}</div>
      </Fragment>
    )
  },
}


/**
 * Feedback list
 *
 * @param feedbacks
 * @param scrollOptions
 * @param className
 * @param moduleView
 * @returns {*}
 * @constructor
 */
const FeedbacksList = ({ feedbacks, scrollOptions, className, moduleView, manualView }) => <ScrollBlock
  className={cn('feedback-list', className)}
  style={scrollOptions}
>
  {
    feedbacks.map((feedback, key) => <Feedback
      key={key} {...feedback}
      render={feedbackHeader[manualView || moduleView] || defaultView}
    />)
  }
</ScrollBlock>


FeedbacksList.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.shape({
    locked: PropTypes.bool,
    date: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
    content: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  })),
  scrollOptions: PropTypes.object,
  className: PropTypes.string,
  moduleView: PropTypes.string,
  manualView: PropTypes.string,
}


FeedbacksList.defaultProps = {
  feedbacks: [],
}

export default connect(({ common: { moduleView } }) => ({ moduleView }))(FeedbacksList)