import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import { MODULE_VIEW_COMPANY, MODULE_VIEW_TEAM } from 'routes/feedback/feedbackTypes'
import UserPic from 'components/Shared/UserPic'
import { IsDev } from 'helpers/dev'
import FeedbackListHandler from 'components/Feedback/FeedbackListHandler'
import './feedbacksLists.scss'
import FeedbackHeader from 'components/Feedback/FeedbackHeader'
import TeamListHandler from 'components/Feedback/TeamListHandler'
import { pathOr } from 'rambda'


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
 * @type {*}
 */
export const feedbackHeader = {
  [MODULE_VIEW_COMPANY]: FeedbackHeader,
  [MODULE_VIEW_TEAM]: FeedbackHeader
}


/**
 * Different List view for each module
 * @type {*}
 */
const feedbackLists = {
  [MODULE_VIEW_TEAM]: TeamListHandler
}

/**
 * Feedback list
 *
 * @param feedbacks
 * @param scrollOptions
 * @param className
 * @param moduleView
 * @param manualView
 * @returns {*}
 * @constructor
 */
const FeedbacksList = ({ feedbacks, scrollOptions, className, moduleView, manualView }) => {

  const ListContainer = pathOr(FeedbackListHandler,[moduleView], feedbackLists)

  return <ScrollBlock
    className={cn('feedback-list', className)}
    style={scrollOptions}
  >
    {
      feedbacks.map((feedback, key) => <ListContainer
        key={key} {...feedback}
        render={feedbackHeader[manualView || moduleView] || defaultView}
      />)
    }
  </ScrollBlock>
}


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