import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PersonRow from 'routes/companyPeople/components/Blocks/PeopleBlock/PersonRow'
import './peopleblock.scss'
import feedbackType from 'routes/feedback/actions/feedbackType'
import addPeople, { GIVE_FEEDBACK_TYPE } from 'routes/feedback/actions/addPeople'
import toggleModal from 'routes/feedback/actions/toggleModal'
import { OPEN_MODAL } from 'routes/feedback/feedbackReducer'
import { FEEDBACK_NEW_TYPE } from 'routes/feedback/feedbackTypes'
import selectFeedback from 'routes/feedback/actions/selectFeedback'
import giveType from 'routes/feedback/actions/giveType'


class PeopleBlock extends Component {


    giveFeedback = (person) => {
        const { feedbackType, addPeople, toggleModal, selectFeedback, giveType } = this.props
        feedbackType(0)
        giveType(FEEDBACK_NEW_TYPE)
        addPeople(person, GIVE_FEEDBACK_TYPE)
        toggleModal(OPEN_MODAL)
    }

    render() {
        const { data } = this.props
        return (
            <div className="people-block">
                <h2 className="people-block__title">Team Members</h2>
                <div>{data.map((person, key) => <PersonRow
                    key={key} {...person}
                    onClick={() => this.giveFeedback(person)}
                />)}</div>
            </div>
        )
    }
}


export default connect(null, { feedbackType, addPeople, toggleModal, selectFeedback, giveType })(PeopleBlock)