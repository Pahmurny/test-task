import React from 'react'
import { connect } from 'react-redux'
import { pathOr } from 'rambda'
import {
  FEEDBACK_FROM_ME, FEEDBACK_NOTE,
  FEEDBACK_RECEIVED_GIVEN,
  FEEDBACK_REQUESTED,
  FEEDBACK_TO_ME,
} from 'routes/feedback/feedbackTypes'
import Feedback from 'components/Feedback/Feedback'

import RGFeedback from 'components/Feedback/RGFeedback/RGFeedback'
import IRFeedback from 'components/Feedback/IRFeedback'
import GFeedback from 'components/Feedback/GFeedback'
import IVRFeedback from 'components/Feedback/IVRFeedback'
import Note from 'components/Feedback/Note'

const feedbackViews = {
  [FEEDBACK_REQUESTED]: IVRFeedback, // I've requested
  [FEEDBACK_RECEIVED_GIVEN]: RGFeedback, // All received and given
  [FEEDBACK_TO_ME]: IRFeedback, // I've received
  [FEEDBACK_FROM_ME]: GFeedback,// I've given
  [FEEDBACK_NOTE]: Note // Note to self
}

const FeedbackListHandler = ({ type, ...rest }) => {
  const Component = pathOr(Feedback, [type], feedbackViews)
  return <Component {...rest}/>
}


export default connect(({ feedbacks: { filter: { feedbackType: { id } } } }) => ({ type: id }))(FeedbackListHandler)