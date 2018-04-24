import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TagsField from 'components/Form/TagsField/TagsField'
import PersonalEmail from 'components/Form/PersonalEmail'
import initializeFilters from 'routes/feedback/actions/initializeFilters'
import updateFilter from 'routes/feedback/actions/updateFilter'
import './memebersform.scss'

class MembersForm extends Component {


    componentDidMount() {
        const { allPeople, initializeFilters } = this.props
        if (!allPeople || allPeople.length < 1) {
            initializeFilters()
        }
    }

    onAddPeople = (person) => {
        const { filter: { searchPeople }, updateFilter } = this.props
        delete person.component
        const sPeople = [...searchPeople, person]
        updateFilter('searchPeople', sPeople)

    }

    onDeletePeople = (idx) => {
        const { filter: { searchPeople }, updateFilter } = this.props
        searchPeople.splice(idx, 1)
        const newPeople = [...searchPeople]
        updateFilter('searchPeople', newPeople)
    }


    render() {
        const { filter: { searchPeople }, allPeople } = this.props

        return (
            <div className="members-form">
                <TagsField
                    tags={searchPeople}
                    suggestions={allPeople.map(person => ({
                        ...person, name: `${person.name}`,
                        component: <PersonalEmail>{person.email}</PersonalEmail>,
                    }))}
                    onAdd={this.onAddPeople}
                    onDelete={this.onDeletePeople}
                    placeholder={'Type team member\'s name...'}
                />
            </div>
        )
    }
}


export default connect(({ feedbacks: { filter, allPeople } }) => ({
    filter,
    allPeople,
}), { initializeFilters, updateFilter })(MembersForm)
