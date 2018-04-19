import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import CloseIcon from 'components/Icons/CloseIcon'
import PopupTitle from 'components/Shared/PopupTitle'
import { CLOSE_MODAL } from 'routes/feedback/feedbackReducer'
import './feedbackForm.scss'


export default class FeedbackForm extends Component {

  static propTypes = {
    onClose: PropTypes.func,
    onChangeType: PropTypes.func,
    feedBack: PropTypes.object,
    title: PropTypes.any,
    style: PropTypes.object,
  }

  render() {
    const { onClose, children, title, style } = this.props

    return <div className={cn('feedback-form')} style={style}>
      <div className="feedback-form__header">
        {title || <PopupTitle>Feedback</PopupTitle>}
        <CloseIcon onClick={() => onClose && onClose(CLOSE_MODAL)}/>
      </div>
      <React.Fragment>
        {children}
      </React.Fragment>
    </div>

  }
}