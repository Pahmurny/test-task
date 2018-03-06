import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Content from 'routes/feedback/components/FeedbackForm/shared/Content'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'
import RoundedBlock from 'components/Shared/RoundedBlock'
import TextArea from 'components/Form/TextArea'
import ActionsBlock from 'routes/feedback/components/FeedbackForm/shared/ActionBlock'
import TagsField from 'components/Form/TagsField/TagsField'
import addPeople from 'routes/feedback/actions/addPeople'
import deletePeople from 'routes/feedback/actions/deletePeople'
import changeNoteText from 'routes/feedback/actions/changeNoteText'
import RequestButton from 'components/Buttons/RequestButton'
import withFocus from 'components/Shared/HOC/focused/withFocus'
import PersonalEmail from 'components/Form/PersonalEmail'

const RoundedFocused = withFocus(RoundedBlock)

class Note extends Component {

    static propTypes = {
        note: PropTypes.shape({
            people: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.any.isRequired,
                name: PropTypes.string.isRequired,
            })),
        }),
        allPeople: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.any.isRequired,
            name: PropTypes.string.isRequired,
        })),
        addPeople: PropTypes.func,
        deletePeople: PropTypes.func,
        changeNoteText: PropTypes.func,
    }

    onChangeText = (e) => {
        const { target: { value: text } } = e
        const { changeNoteText } = this.props
        if (changeNoteText) {
            changeNoteText(text)
        }
    }

    render() {
        const { note: { people, text }, addPeople, deletePeople, allPeople } = this.props

        return (
            <Content className="note__view">
                <FieldTitle>
                    Who's the note about
                </FieldTitle>
                <RoundedFocused style={{ marginTop: 17 }}>
                    <TagsField
                        tags={people}
                        onAdd={addPeople}
                        onDelete={deletePeople}
                        suggestions={allPeople.map(person => ({...person, name:`${person.name}`, component: <PersonalEmail>{person.email}</PersonalEmail>}))}
                    />
                </RoundedFocused>

                <FieldTitle style={{ marginTop: 26 }}>
                    What do you want to remember for later?
                </FieldTitle>
                <RoundedFocused style={{ marginTop: 17 }}>
                    <TextArea value={text} onChange={this.onChangeText}/>
                </RoundedFocused>

                <ActionsBlock>
                    <RequestButton>
                        Save Note
                    </RequestButton>
                </ActionsBlock>
            </Content>
        )
    }
}


export default connect(({ feedbacks: { note, allPeople } }) => ({ note, allPeople }),
    {
        addPeople,
        deletePeople,
        changeNoteText,
    })(Note)