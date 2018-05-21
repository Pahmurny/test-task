import React from 'react'
import { pathOr } from 'rambda'
import Feedback from 'components/Feedback/Feedback'
import { FEEDBACK_NOTE } from 'routes/feedback/feedbackTypes'
import { connect } from 'react-redux'
import Note from 'components/Feedback/Note'


const feedbackViews = {
  [FEEDBACK_NOTE]: Note,
}


const TeamListHandler = ({ type, ...rest }) => {
  const Component = pathOr(Feedback, [type], feedbackViews)
  return <Component {...rest}/>
}


export default connect(({ feedbacks: { filter: { teamType: { id } } } }) => ({ type: id }))(TeamListHandler)
