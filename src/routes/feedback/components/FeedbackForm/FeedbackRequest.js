import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Content from 'routes/feedback/components/FeedbackForm/shared/Content'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'
import TagsField from 'components/Form/TagsField/TagsField'
import addPeople, { REQUEST_FEEDBACK_TYPE } from 'routes/feedback/actions/addPeople'
import deletePeople from 'routes/feedback/actions/deletePeople'
import Radio from 'components/Form/Radio'
import setWhatRequest from 'routes/feedback/actions/setWhatRequest'
import TextArea from 'components/Form/TextArea'
import RoundedBlock from 'components/Shared/RoundedBlock'
import changeFeedbackContent from 'routes/feedback/actions/changeFeedbackContent'
import ActionsBlock from 'routes/feedback/components/FeedbackForm/shared/ActionBlock'
import DefaultButton from 'components/Buttons/DefaultButton'
import withFocus from 'components/Shared/HOC/focused/withFocus'


const RoundedFocused = withFocus(RoundedBlock)

const whatItems = [
  'Do you have any feedback for me?',
  'What can I start doing? Stop doing? Continue doing?',
  'Ask a specific question:',
]


class FeedbackRequest extends Component {


  static propTypes = {
    request: PropTypes.object,
    deletePeople: PropTypes.func.isRequired,
    setWhatRequest: PropTypes.func.isRequired,
    addPeople: PropTypes.func.isRequired,
    changeFeedbackContent: PropTypes.func.isRequired,

  }


  onAddPeople = (person) => {
    const { addPeople } = this.props
    addPeople(person, REQUEST_FEEDBACK_TYPE)
  }

  onDeletePeople = (idx) => {
    const { deletePeople } = this.props
    deletePeople(idx, REQUEST_FEEDBACK_TYPE)
  }

  onChangeText = (e) => {
    const { target: { value: content } } = e
    const { changeFeedbackContent } = this.props
    changeFeedbackContent(content, REQUEST_FEEDBACK_TYPE)
  }

  render() {
    const { allPeople, request, setWhatRequest } = this.props
    const { people, what, content } = request

    return (
      <Content className="request-export__view">
        <FieldTitle style={{ marginBottom: 12}} >
          Who do you want request from?
        </FieldTitle>
          <TagsField
            placeholder={'Type their name...'}
            tags={people}
            suggestions={allPeople}
            onAdd={this.onAddPeople}
            onDelete={this.onDeletePeople}
          />
        <FieldTitle style={{ marginTop: 30 }}>
          What do you want to ask them?
        </FieldTitle>
        {
          whatItems.map((w, key) => <Radio
            selected={key === what} key={key}
            onClick={() => setWhatRequest(key)}
          >{w}</Radio>)
        }
        <RoundedFocused style={{ marginTop: 18 }}>
                    <TextArea
                      placeholder={'Optional, write your question here.'}
                      style={{ height: 160 }}
                      value={content}
                      onChange={this.onChangeText}
                    />
        </RoundedFocused>
        <ActionsBlock>
          <DefaultButton>
            Request Feedback
          </DefaultButton>
        </ActionsBlock>
      </Content>
    )
  }
}


export default connect(({ feedbacks: { request, allPeople } }) => ({ request, allPeople }),
  {
    addPeople, deletePeople,
    setWhatRequest,
    changeFeedbackContent,
  })(FeedbackRequest)