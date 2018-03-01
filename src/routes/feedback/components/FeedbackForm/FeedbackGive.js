import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Content from 'routes/feedback/components/FeedbackForm/shared/Content'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'
import RoundedTopBlock from 'components/Shared/RoundedTopBlock'
import TagsField from 'components/Form/TagsField/TagsField'
import addPeople, { GIVE_FEEDBACK_TYPE } from 'routes/feedback/actions/addPeople'
import deletePeople from 'routes/feedback/actions/deletePeople'
import { FEEDBACK_ANY_TYPE, FEEDBACK_NEW_TYPE, FEEDBACK_REPLY_TYPE } from 'routes/feedback/feedbackTypes'
import giveType from 'routes/feedback/actions/giveType'
import PendingFeedbacks from 'routes/feedback/components/PendingFeedbacks/PendingFeedbacks'
import getPendingRequests from 'routes/feedback/actions/getPendingRequests'
import YellowBlock from 'components/Shared/YelowBlock'
import PageLoader from 'components/Shared/PageLoader'
import PendingFeedback from 'routes/feedback/components/PendingFeedbacks/PendingFeedback'
import NewFeedback from 'routes/feedback/components/NewFeedback/NewFeedback'
import selectFeedback from 'routes/feedback/actions/selectFeedback'


class FeedbackGive extends Component {

    static propTypes = {
        give: PropTypes.object,
        allPeople: PropTypes.array,
        addPeople: PropTypes.func.isRequired,
        deletePeople: PropTypes.func.isRequired,
        giveType: PropTypes.func.isRequired,
        getPendingRequests: PropTypes.func.isRequired,
        selectFeedback: PropTypes.func.isRequired,
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


    renderPending = () => {
        const { give: { pendingLoading, pendingFeedbacks }, selectFeedback } = this.props
        if (pendingLoading) {
            return <PageLoader/>
        }
        return <React.Fragment>
            <FieldTitle style={{ marginTop: 25, marginBottom: 10 }}>
                Pending requests({pendingFeedbacks.length})
            </FieldTitle>
            <PendingFeedbacks style={{ height: 270 }}>
                <PendingFeedbacks>
                    {
                        pendingFeedbacks.map((feedback, key) => <PendingFeedback
                            key={key}
                            feedback={feedback}
                            onSelect={selectFeedback}
                        />)
                    }
                </PendingFeedbacks>
            </PendingFeedbacks>
        </React.Fragment>
    }

    render() {

        const {
            give: { people, feedbackType, replyTo },
            allPeople,
        } = this.props

        return (
            <Content className="give-export__view">
                <FieldTitle>
                    Who are you giving feedback to?
                </FieldTitle>
                {feedbackType !== FEEDBACK_REPLY_TYPE && <RoundedTopBlock style={{ marginTop: 17 }}>
                    <TagsField
                        tags={people}
                        suggestions={allPeople}
                        onAdd={this.onAddPeople}
                        onDelete={this.onDeletePeople}
                    />
                </RoundedTopBlock>}
                {(feedbackType !== FEEDBACK_NEW_TYPE && feedbackType !== FEEDBACK_REPLY_TYPE) && this.renderPending()}
                {(feedbackType === FEEDBACK_NEW_TYPE || feedbackType === FEEDBACK_REPLY_TYPE) && <NewFeedback/>}
            </Content>
        )
    }
}


export default connect(({ feedbacks: { give, allPeople } }) => ({ give, allPeople }), {
    addPeople,
    deletePeople,
    giveType,
    getPendingRequests,
    selectFeedback,
})(FeedbackGive)