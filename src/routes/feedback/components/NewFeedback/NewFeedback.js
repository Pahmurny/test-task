import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FEEDBACK_NEW_TYPE, FEEDBACK_REPLY_TYPE } from 'routes/feedback/feedbackTypes'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'
import TextArea from 'components/Form/TextArea'
import RoundedBlock from 'components/Shared/RoundedBlock'
import PendingFeedback from 'routes/feedback/components/PendingFeedbacks/PendingFeedback'
import clearFeedback from 'routes/feedback/actions/clearFeedback'
import changeFeedbackContent from 'routes/feedback/actions/changeFeedbackContent'
import withFocus from 'components/Shared/HOC/focused/withFocus'
import EmbodyButton from 'components/Buttons/EmbodyButton'
import './newfeedback.scss'
import setEmbodyValue from 'routes/feedback/actions/setEmbodyValue'


const RoundedFocused = withFocus(RoundedBlock)


/**
 *  Component which is shown when new feedback should be wrote
 *
 */
class NewFeedback extends Component {

    static propTypes = {
        feedbackType: PropTypes.oneOf([FEEDBACK_NEW_TYPE, FEEDBACK_REPLY_TYPE]),
        content: PropTypes.string.isRequired,
        replyTo: PropTypes.object,
        clearFeedback: PropTypes.func.isRequired,
        setEmbodyValue: PropTypes.func.isRequired,
        changeFeedbackContent: PropTypes.func.isRequired,
        embodyValues: PropTypes.array.isRequired,
        embodyValue: PropTypes.number.isRequired,
    }

    onChangeText = (e) => {
        const { target: { value: content } } = e
        const { changeFeedbackContent } = this.props
        changeFeedbackContent(content)
    }

    render() {
        const { replyTo, clearFeedback, content, embodyValues, embodyValue, setEmbodyValue } = this.props
        return <div className="newfeedback-container" style={{ paddingTop: 30 }}>
            {replyTo && <PendingFeedback onClose={clearFeedback} feedback={replyTo}/>}
            <FieldTitle style={{ marginBottom: 12 }}>
                What is your feedback?
            </FieldTitle>
            <RoundedFocused>
                <TextArea placeholder={'Write your feedback here.'} onChange={this.onChangeText} value={content} style={{ height: 170 }}/>
            </RoundedFocused>
            <FieldTitle style={{ marginTop: 30 }} className="field-title">
                Which values did they embody? <span>View descriptions</span>
            </FieldTitle>
            <div className="embody-values">
                {
                    embodyValues.map((embody, key) => <EmbodyButton
                        className={'embody-values__button'}
                        active={embodyValue.includes(key)}
                        key={key}
                        onClick={() => setEmbodyValue(key)}
                    >{embody}</EmbodyButton>)
                }
            </div>
        </div>
    }
}


export default connect(({ feedbacks: { give: { replyTo, feedbackType, content, embodyValues, embodyValue } } }) => ({
    replyTo,
    feedbackType,
    content,
    embodyValues,
    embodyValue,
}), { clearFeedback, changeFeedbackContent, setEmbodyValue })(NewFeedback)

