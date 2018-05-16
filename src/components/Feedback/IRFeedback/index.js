import React from 'react'
import FromToFeedback from 'components/Feedback/FromToFeedback'
import './irfeedback.scss'
import AboutBlock from 'components/Feedback/AboutBlock'
import { IsDev } from 'helpers/dev'

const rFeedback = (props) => <FromToFeedback {...props} className={'received-feedback'}>
  {props => <div className="received-feedback__content">
    <div className="received-feedback__question-about">
      <AboutBlock
        name={props.user.name}
        image={props.user.image}
        className={'received-feedback__about'}
      />
      {(props.question || IsDev()) &&
      <div className={'received-feedback__question-about-question'}>{props.question || 'Request: How’s my transition as a part-time advisor?'}</div>}
    </div>
    <div>{props.content}</div>
  </div>}
</FromToFeedback>


export default rFeedback