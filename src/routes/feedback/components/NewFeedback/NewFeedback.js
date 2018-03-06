import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FEEDBACK_NEW_TYPE, FEEDBACK_REPLY_TYPE } from 'routes/feedback/feedbackTypes'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'
import TextArea from 'components/Form/TextArea'
import RoundedBlock from 'components/Shared/RoundedBlock'
import './newfeedback.scss'
import PendingFeedback from 'routes/feedback/components/PendingFeedbacks/PendingFeedback'
import clearFeedback from 'routes/feedback/actions/clearFeedback'
import changeFeedbackContent from 'routes/feedback/actions/changeFeedbackContent'
import withFocus from 'components/Shared/HOC/focused/withFocus'

const RoundedFocused = withFocus(RoundedBlock)

class NewFeedback extends Component {

    static propTypes = {
        feedbackType: PropTypes.oneOf([FEEDBACK_NEW_TYPE, FEEDBACK_REPLY_TYPE]),
        content: PropTypes.string.isRequired,
        replyTo: PropTypes.object,
        clearFeedback: PropTypes.func.isRequired,
        changeFeedbackContent: PropTypes.func.isRequired,
    }

    onChangeText = (e) => {
        const { target: { value: content } } = e
        const { changeFeedbackContent } = this.props
        changeFeedbackContent(content)
    }

    render() {
        const { replyTo, clearFeedback, content } = this.props
        return <div className="newfeedback-container" style={{ paddingTop: 20 }}>
            {replyTo && <PendingFeedback onClose={clearFeedback} feedback={replyTo}/>}
            <FieldTitle style={{ marginTop: 20, marginBottom: 20 }}>
                What is your feedback?
            </FieldTitle>
            <RoundedFocused>
                <TextArea onChange={this.onChangeText} value={content} style={{ height: 170 }}/>
            </RoundedFocused>
            <FieldTitle style={{ marginTop: 20 }} className="field-title">
                Which values did they embody? <span>View descriptions</span>
            </FieldTitle>
        </div>
    }
}


export default connect(({ feedbacks: { give: { replyTo, feedbackType, content } } }) => ({
    replyTo,
    feedbackType,
    content,
}), { clearFeedback, changeFeedbackContent })(NewFeedback)

