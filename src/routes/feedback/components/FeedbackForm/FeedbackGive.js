import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Content from 'routes/feedback/components/FeedbackForm/shared/Content'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle'
import RoundedTopBlock from 'components/Shared/RoundedTopBlock'
import TagsField from 'components/Form/TagsField/TagsField'
import addPeople, { GIVE_FEEDBACK_TYPE } from 'routes/feedback/actions/addPeople'
import deletePeople from 'routes/feedback/actions/deletePeople'


class FeedbackGive extends Component {

    static propTypes = {
        give: PropTypes.object,
        allPeople: PropTypes.array,
        addPeople: PropTypes.func.isRequired,
        deletePeople: PropTypes.func.isRequired,
    }


    onAddPeople = (person) => {
        const { addPeople } = this.props
        addPeople(person, GIVE_FEEDBACK_TYPE)
    }

    onDeletePeople = (idx) => {
        const { deletePeople } = this.props
        if (deletePeople) {
            deletePeople(idx, GIVE_FEEDBACK_TYPE)
        }
    }

    render() {

        const { give: { people }, allPeople } = this.props
        return (
            <Content className="give-export__view">
                <FieldTitle>
                    Who are you giving feedback to?
                </FieldTitle>
                <RoundedTopBlock style={{ marginTop: 17 }}>
                    <TagsField
                        tags={people}
                        suggestions={allPeople}
                        onAdd={this.onAddPeople}
                        onDelete={this.onDeletePeople}
                    />
                </RoundedTopBlock>
            </Content>
        )
    }
}


export default connect(({ feedbacks: { give, allPeople } }) => ({ give, allPeople }), {
    addPeople,
    deletePeople,
})(FeedbackGive)