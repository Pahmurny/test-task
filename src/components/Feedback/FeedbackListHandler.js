import React from 'react'
import { connect } from 'react-redux'
import { pathOr } from 'rambda'
import {
  FEEDBACK_FROM_ME,
  FEEDBACK_RECEIVED_GIVEN,
  FEEDBACK_REQUESTED,
  FEEDBACK_TO_ME,
} from 'routes/feedback/feedbackTypes'
import Feedback from 'components/Feedback/Feedback'

import RGFeedback from 'components/Feedback/rgFeedback/RGFeedback'
import irFeedback from 'components/Feedback/irFeedback'
import gFeedback from 'components/Feedback/gFeedback'

const feedbackViews = {
  [FEEDBACK_REQUESTED]: Feedback,
  [FEEDBACK_RECEIVED_GIVEN]: RGFeedback, // All received and given
  [FEEDBACK_TO_ME]: irFeedback, // I've received
  [FEEDBACK_FROM_ME]: gFeedback,// I've given
}

const FeedbackListHandler = ({ type, ...rest }) => {
  const Component = pathOr(Feedback, [type], feedbackViews)
  return <Component {...rest}/>
}


export default connect(({ feedbacks: { filter: { feedbackType: { id } } } }) => ({ type: id }))(FeedbackListHandler)