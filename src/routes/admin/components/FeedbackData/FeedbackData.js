import React from 'react'
import PropTypes from 'prop-types'
import m from 'moment'
import './feedbackdata.scss'
import FromToTitle from 'routes/admin/components/FromToTitle/FromToTitle'

const FeedbackData = ({ feedbackInfo }) => {

  const { content, response, date } = feedbackInfo

  return <div className="feedback-data">
    <div className="feedback-data__content">{content}</div>
    {response && <div className="feedback-data__response">
      <div className="feedback-data__response-title">
        <FromToTitle {...response}/>
      </div>
      <div className="feedback-data__content">{response.content}</div>
    </div>}
    <div className="feedback-data__data">
      Requested {`${m(date).format('MMM DD, YYYY ')} at ${m(date).format('hh:mm A')}`}
    </div>
  </div>
}


FeedbackData.propTypes = {
  feedbackInfo: PropTypes.object,
}

export default FeedbackData