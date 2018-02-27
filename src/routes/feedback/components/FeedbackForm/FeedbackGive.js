import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Content from 'routes/feedback/components/FeedbackForm/shared/Content'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'

export default class FeedbackGive extends Component{


    render(){
        return(
            <Content className="give-export__view">
                <FieldTitle>
                    Who are you giving feedback to?
                </FieldTitle>
            </Content>
        )
    }
}