/* eslint-disable */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import Content from 'routes/feedback/components/FeedbackForm/shared/Content'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'
import TagsField from 'components/Form/TagsField/TagsField'
import addPeople, { GIVE_FEEDBACK_TYPE } from 'routes/feedback/actions/addPeople'
import deletePeople from 'routes/feedback/actions/deletePeople'
import { FEEDBACK_ANY_TYPE, FEEDBACK_NEW_TYPE, FEEDBACK_REPLY_TYPE } from 'routes/feedback/feedbackTypes'
import giveType from 'routes/feedback/actions/giveType'
import PendingFeedbacks from 'routes/feedback/components/PendingFeedbacks/PendingFeedbacks'
import getPendingRequests from 'routes/feedback/actions/getPendingRequests'
import PageLoader from 'components/Shared/PageLoader'
import PendingFeedback from 'routes/feedback/components/PendingFeedbacks/PendingFeedback'
import NewFeedback from 'routes/feedback/components/NewFeedback/NewFeedback'
import selectFeedback from 'routes/feedback/actions/selectFeedback'
import ActionsBlock from 'routes/feedback/components/FeedbackForm/shared/ActionBlock'
import DefaultButton from 'components/Buttons/DefaultButton'
import ToggleField from 'components/Form/Toggle/ToggleField'
import togglePublic from 'routes/feedback/actions/togglePublic'
import toggleAnonymous from 'routes/feedback/actions/toggleAnonymous'
import RoundedBlock from 'components/Shared/RoundedBlock'
import withFocus from 'components/Shared/HOC/focused/withFocus'
import PersonalEmail from 'components/Form/PersonalEmail'
import deleteFeedback from 'routes/feedback/actions/deleteFeedback'
import './feedbackgive.scss'
import LockIcon2 from 'components/Icons/LockIcon2'
import { pathOr } from 'rambda'

const RoundedFocused = withFocus(RoundedBlock)
const ANONYMOUS_TEXT = 'This feedback will be sent with “Anonymous” as the giver.'
const PUBLIC_TEXT = 'This feedback will be sent with your name as the giver.'


class FeedbackGive extends Component {

  static propTypes = {
    give: PropTypes.object,
    allPeople: PropTypes.array,
    addPeople: PropTypes.func.isRequired,
    deletePeople: PropTypes.func.isRequired,
    giveType: PropTypes.func.isRequired,
    getPendingRequests: PropTypes.func.isRequired,
    selectFeedback: PropTypes.func.isRequired,
    togglePublic: PropTypes.func.isRequired,
    toggleAnonymous: PropTypes.func.isRequired,
    deleteFeedback: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { getPendingRequests } = this.props
    getPendingRequests()
  }


  onAddPeople = (person) => {
    const { addPeople, giveType } = this.props
    addPeople(person, GIVE_FEEDBACK_TYPE)
    giveType(FEEDBACK_NEW_TYPE)
  }

  onDeletePeople = (idx) => {
    const { deletePeople } = this.props
    if (deletePeople) {
      deletePeople(idx, GIVE_FEEDBACK_TYPE)
    }
  }

  getReceiverName = () => {
    const { give: { replyTo, people, isPublic } } = this.props
    let label = ''

    if (isPublic) {
      if (replyTo) {
        const { user: { name } } = replyTo
        label = `Only you and ${name} can view this.`
      } else {
        label = 'Everyone at ${company} can read this.'
      }
    } else {
      label = `Only you and ${people.length} other person can view this.`
    }

    return label
  }

  renderPublic = () => {
    const { give: { feedbackType, isPublic, ...giveUser }, togglePublic } = this.props

    const { name } = pathOr({ name: 'John Doe' }, ['replyTo', 'user'], giveUser)

    if (feedbackType === FEEDBACK_REPLY_TYPE) {
      return <div className="give-export__only-you">Only you and {name} can read this.</div>
    }
    return <ToggleField
      onClick={togglePublic}
      leftLabel={'Public'}
      rightLabel={<React.Fragment>
        <LockIcon2 className={cn('give-export__actions__lock-icon', { active: !isPublic })}/>
        Private</React.Fragment>}
      label={this.getReceiverName()}
      toggle={isPublic}
      className={'give-export__action-toggle'}
    />
  }

  renderPending = () => {
    const { give: { pendingLoading, pendingFeedbacks }, selectFeedback, deleteFeedback } = this.props
    if (pendingLoading) {
      return <PageLoader/>
    }
    return <React.Fragment>
      <FieldTitle className="pending__field-title">
        Pending requests ({pendingFeedbacks.length})
      </FieldTitle>
      <PendingFeedbacks className="pending__block">
        <PendingFeedbacks>
          {pendingFeedbacks.map((feedback, key) => <PendingFeedback
            key={key}
            feedback={feedback}
            onSelect={selectFeedback}
            onClose={deleteFeedback}
          />)
          }
        </PendingFeedbacks>
      </PendingFeedbacks>
    </React.Fragment>
  }

  render() {

    const {
      give: { people, feedbackType, isAnonymous },
      allPeople,
      isPublic,
      toggleAnonymous,
    } = this.props
    return (
      <Fragment>
        <Content className="give-export__view">
          <FieldTitle className={'give-export__title'}>
            Who are you giving feedback to?
          </FieldTitle>
          {feedbackType !== FEEDBACK_REPLY_TYPE && <RoundedFocused
            className="rounded-focused">
            <TagsField
              tags={people}
              suggestions={allPeople.map(person => ({
                ...person, name: `${person.name}`,
                component: <PersonalEmail>{person.email}</PersonalEmail>,
              }))}
              onAdd={this.onAddPeople}
              onDelete={this.onDeletePeople}
            />
          </RoundedFocused>}
          {(feedbackType !== FEEDBACK_NEW_TYPE && feedbackType !== FEEDBACK_REPLY_TYPE) && this.renderPending()}
          {(feedbackType === FEEDBACK_NEW_TYPE || feedbackType === FEEDBACK_REPLY_TYPE) && <NewFeedback/>}

        </Content>
        {feedbackType !== FEEDBACK_ANY_TYPE && <ActionsBlock className="give-export__actions">
          <div className="private-block">
            {this.renderPublic()}
            {!isPublic && <ToggleField
              onClick={toggleAnonymous}
              leftLabel={'With Name'}
              rightLabel={'Anonymous'}
              className={'give-export__action-toggle below'}
              label={!isAnonymous ? ANONYMOUS_TEXT
                : PUBLIC_TEXT
              }
              toggle={isAnonymous}
            />}
          </div>
          <DefaultButton>
            Give feedback
          </DefaultButton>
        </ActionsBlock>}
      </Fragment>
    )
  }
}


export default connect(({ feedbacks: { give, allPeople } }) => ({ give, allPeople }), {
  addPeople,
  deletePeople,
  giveType,
  getPendingRequests,
  selectFeedback,
  togglePublic,
  toggleAnonymous,
  deleteFeedback,
})(FeedbackGive)