import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { pathOr } from 'rambda'
import getCompanyPeople from 'routes/companyPeople/actions/getCompanyPeople'
import PeopleListRow from 'routes/companyPeople/components/PeopleList/PeopleListRow'
import PageLoader from 'components/Shared/PageLoader'
import toggleModal from 'routes/feedback/actions/toggleModal'
import { OPEN_MODAL } from 'routes/feedback/feedbackReducer'
import addPeople, { GIVE_FEEDBACK_TYPE } from 'routes/feedback/actions/addPeople'
import { FEEDBACK_NEW_TYPE } from 'routes/feedback/feedbackTypes'
import selectFeedback from 'routes/feedback/actions/selectFeedback'
import giveType from 'routes/feedback/actions/giveType'
import feedbackType from 'routes/feedback/actions/feedbackType'
import './companypeoplelist.scss'


class PeopleList extends Component {


    static propTypes = {
        getCompanyPeople: PropTypes.func.isRequired,
    }


    componentDidMount() {
        const { getCompanyPeople } = this.props
        getCompanyPeople()
    }

    getPeople = () => {
        return pathOr([], ['people', 'people'], this.props)
    }

    onPersonClick = (person) => {
        const { feedbackType, addPeople, toggleModal, giveType } = this.props
        feedbackType(0)
        giveType(FEEDBACK_NEW_TYPE)
        addPeople(person, GIVE_FEEDBACK_TYPE)
        toggleModal(OPEN_MODAL)
    }

    render() {
        const { loadingPeople } = this.props
        const people = this.getPeople()
        if (loadingPeople) {
            return <PageLoader/>
        }
        return (<div className="company-people-list">
            <div className="company-people-list__header">
                <div className="company-people-list__col">
                    Employee
                </div>
                <div className="company-people-list__col">
                    Title
                </div>
                <div className="company-people-list__col">
                    Team
                </div>
                <div className="company-people-list__col"/>
            </div>
            {
                people.map((person, key) => <PeopleListRow
                    key={key}
                    {...person}
                    onClick={() => this.onPersonClick(person)}
                />)
            }
        </div>)
    }
}


export default connect(({ companyPeople }) => ({ ...companyPeople }), { getCompanyPeople,
    feedbackType, addPeople, toggleModal, selectFeedback, giveType  })(PeopleList)