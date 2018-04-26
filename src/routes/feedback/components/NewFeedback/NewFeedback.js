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
import getCompanyValues from 'routes/companyPeople/actions/getCompanyValues'
import updateCompanyPeopleValue from 'routes/companyPeople/actions/updateCompanyPeopleValue'
import getTeams from 'routes/companyPeople/actions/getTeams'


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
        getCompanyValues: PropTypes.func.isRequired,
        getTeams: PropTypes.func.isRequired,
        changeFeedbackContent: PropTypes.func.isRequired,
        embodyValues: PropTypes.array.isRequired,
        embodyValue: PropTypes.number.isRequired,
    }


    componentDidMount() {
        const { companyValues, company, getCompanyValues, getTeams } = this.props
        if (!companyValues || !company) {
            getTeams()
            getCompanyValues()
        }

    }

    onChangeText = (e) => {
        const { target: { value: content } } = e
        const { changeFeedbackContent } = this.props
        changeFeedbackContent(content)
    }

    render() {
        const {
            replyTo, clearFeedback, content, embodyValues, embodyValue, setEmbodyValue,
            companyValues, company, updateCompanyPeopleValue,
        } = this.props
        return <div className="newfeedback-container" style={{ paddingTop: 30 }}>
            {replyTo && <PendingFeedback onClose={clearFeedback} feedback={replyTo}/>}
            <FieldTitle style={{ marginBottom: 12 }}>
                What is your feedback?
            </FieldTitle>
            <RoundedFocused>
                <TextArea placeholder={'Write your feedback here.'} onChange={this.onChangeText} value={content}
                          style={{ height: 170 }}/>
            </RoundedFocused>
            <FieldTitle style={{ marginTop: 30 }} className="field-title">
                Which values did they embody? {(companyValues && company) && <span
                onClick={() => updateCompanyPeopleValue('showValues', true)}
                className={'newfeedback-container__show-values'}
            >View descriptions</span>}
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


export default connect(({ feedbacks: { give: { replyTo, feedbackType, content, embodyValues, embodyValue } }, companyPeople }) => ({
    replyTo,
    feedbackType,
    content,
    embodyValues,
    embodyValue,
    ...companyPeople,
}), {
    clearFeedback, changeFeedbackContent, setEmbodyValue, getCompanyValues, updateCompanyPeopleValue,
    getTeams,
})(NewFeedback)

