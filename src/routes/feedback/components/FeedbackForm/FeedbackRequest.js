import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Content from 'routes/feedback/components/FeedbackForm/shared/Content'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'

export default class FeedbackRequest extends Component {

    render() {
        return (
            <Content className="request-export__view">
                <FieldTitle>
                    Who do you want request from?
                </FieldTitle>
            </Content>
        )
    }
}