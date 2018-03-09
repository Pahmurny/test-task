import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CloseIcon from 'components/Icons/CloseIcon'
import PageTitle from 'components/Shared/PageTitle'
import { CLOSE_MODAL } from 'routes/feedback/feedbackReducer'
import FeedbackType from 'routes/feedback/components/FeedbackType/FeedbackType'
import './feedbackForm.scss'
import FeedbackGive from 'routes/feedback/components/FeedbackForm/FeedbackGive'
import FeedbackRequest from 'routes/feedback/components/FeedbackForm/FeedbackRequest'
import Note from 'routes/feedback/components/FeedbackForm/Note'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'


const views = {
    0: FeedbackGive,
    1: FeedbackRequest,
    2: Note,
}


export default class FeedbackForm extends Component {

    static propTypes = {
        onClose: PropTypes.func,
        onChangeType: PropTypes.func,
        feedBack: PropTypes.object,
    }

    render() {
        const { onClose, feedBack, onChangeType } = this.props
        const { type } = feedBack

        const View = views[type]

        return <div className="feedback-form">
            <div className="feedback-form__header">
                <PageTitle style={{ fontSize: 24 }}>Feedback</PageTitle>
                <CloseIcon onClick={() => onClose(CLOSE_MODAL)}/>
            </div>
            <div className="feedback-form__actions">
                <FeedbackType
                    items={[
                        {
                            id: 0,
                            title: 'Give feedback',
                        },
                        {
                            id: 1,
                            title: 'Request feedback',
                        },
                        {
                            id: 2,
                            title: 'Note to Self',
                        },
                    ]}
                    activeItem={{ id: type }}
                    onChange={onChangeType}
                />
            </div>
            <div className="feedback-form__view">
                <ScrollBlock style={{ height: 500 }}>
                    <View/>
                </ScrollBlock>
            </div>
        </div>

    }
}