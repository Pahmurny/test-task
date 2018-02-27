import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Content from 'routes/feedback/components/FeedbackForm/shared/Content'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'

export default class Note extends Component {
    render() {
        return (
            <Content className="note__view">
                <FieldTitle>
                    Who's the note about
                </FieldTitle>

            </Content>
        )
    }
}