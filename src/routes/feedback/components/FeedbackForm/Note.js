import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Content from 'routes/feedback/components/FeedbackForm/shared/Content'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'
import RoundedTopBlock from 'components/Shared/RoundedTopBlock'
import RoundedBlock from 'components/Shared/RoundedBlock'
import TextArea from 'components/Form/TextArea'
import ActionsBlock from 'routes/feedback/components/FeedbackForm/shared/ActionBlock'
import WhiteButton from 'components/Buttons/WhiteButton'

export default class Note extends Component {
    render() {
        return (
            <Content className="note__view">
                <FieldTitle>
                    Who's the note about
                </FieldTitle>
                <RoundedTopBlock style={{ marginTop: 17 }}/>

                <FieldTitle style={{ marginTop: 26 }}>
                    What do you want to remember for later?
                </FieldTitle>
                <RoundedBlock style={{ marginTop: 17 }}>
                    <TextArea/>
                </RoundedBlock>

                <ActionsBlock>
                    <WhiteButton>
                        Save Note
                    </WhiteButton>
                </ActionsBlock>
            </Content>
        )
    }
}