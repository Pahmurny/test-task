import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './adminfeedbacklist.scss'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import ShortFeedback from 'components/Feedback/short/ShortFeedback'



export default class AdminFeedbackList extends PureComponent {


    render() {
        const { feedbacks } = this.props

        return (<div className={'admin-feedback-list'}>
            <div className="admin-feedback-list__header">
                <div className="admin-feedback-list__header-item">
                    Time
                </div>
                <div className="admin-feedback-list__header-item">
                    Requester
                </div>
                <div className="admin-feedback-list__header-item">
                    Giver
                </div>
                <div className="admin-feedback-list__header-item">
                    Receiver
                </div>
                <div className={'admin-feedback-list__header-item last'}/>
            </div>
            <div className="admin-feedback-list__data">
                <ScrollBlock className="admin-feedback-list__data__scroll-block">
                    {feedbacks.map((feedback, key) => <ShortFeedback
                        {...feedback} key={key}
                        last={key === feedbacks.length - 1}
                    />)}
                </ScrollBlock>
            </div>
        </div>)
    }
}